import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AuthorActionTypes, AddAuthor, UpdateAuthor, DeleteAuthor } from 'src/app/features/authors/store/actions/author.actions';

export interface AuthorDialogData {
  action: 'ADD' | 'UPDATE' | 'DELETE';
  author: any;
}

@Component({
  selector: 'app-author-form-dialog',
  templateUrl: './author-form-dialog.component.html',
  styleUrls: ['./author-form-dialog.component.scss']
})
export class AuthorFormDialogComponent implements OnInit {
  isLoading: boolean = false;
  destroyed$ = new Subject<boolean>();
  public actions: typeof ReqActions = ReqActions;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialogRef: MatDialogRef<AuthorFormDialogComponent>,
    actions$: Actions,
    @Inject(MAT_DIALOG_DATA) public data: AuthorDialogData) {

      actions$.pipe(
        ofType(
          AuthorActionTypes.AddAuthorSuccess,
          AuthorActionTypes.UpdateAuthorSuccess,
          AuthorActionTypes.DeleteAuthorSuccess),
        takeUntil(this.destroyed$)
     )
     .subscribe(() => {
        this.isLoading = false;
        this.dialogRef.close();
     });

     actions$.pipe(
      ofType(
        AuthorActionTypes.AddAuthorError,
        AuthorActionTypes.UpdateAuthorError,
        AuthorActionTypes.DeleteAuthorError),
      takeUntil(this.destroyed$)
   )
   .subscribe(() => {
      this.isLoading = false;
      this.form.reset();
   });

    }

  ngOnInit(): void {
    this.createForm();
    if(this.data.action === 'UPDATE') {
      this.populateForm();
    }
  }

  get nome() { return this.form.get('nome'); }

  createForm(): void {
    this.form = this.fb.group<AuthorForm>({
      nome: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  populateForm() {
    this.form.patchValue({
      nome: this.data.author.nome
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) { return };
    this.isLoading = true;
    switch (this.data.action) {
      case 'ADD':
        this.addAuthor();
        break;
      case 'UPDATE':
        this.updateAuthor();
        break;
      case 'DELETE':
        this.deleteAuthor();
        break;
      default:
        this.isLoading = false;
        break;
    }
  }

  addAuthor() {
    this.store.dispatch(new AddAuthor({data: this.form.value}))
  }

  updateAuthor() {
    const payload = Object.assign({}, this.data.author, this.form.value)
    this.store.dispatch(new UpdateAuthor({data: payload}))
  }
  
  deleteAuthor() {
    this.store.dispatch(new DeleteAuthor({id: this.data.author.id}))
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

export interface AuthorForm {
  nome: FormControl<string | null>
}

export enum ReqActions {
  'ADD' = 'Adicionar',
  'UPDATE' = 'Atualizar',
  'DELETE' = 'Remover'
}