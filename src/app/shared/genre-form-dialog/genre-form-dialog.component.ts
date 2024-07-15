import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AddGenre, DeleteGenre, GenreActionTypes, UpdateGenre } from 'src/app/features/genres/store/actions/genre.actions';

export interface GenreDialogData {
  action: 'ADD' | 'UPDATE' | 'DELETE';
  genre: any;
}

@Component({
  selector: 'app-genre-form-dialog',
  templateUrl: './genre-form-dialog.component.html',
  styleUrls: ['./genre-form-dialog.component.scss']
})
export class GenreFormDialogComponent implements OnInit {
  isLoading: boolean = false;
  destroyed$ = new Subject<boolean>();
  public actions: typeof ReqActions = ReqActions;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialogRef: MatDialogRef<GenreFormDialogComponent>,
    actions$: Actions,
    @Inject(MAT_DIALOG_DATA) public data: GenreDialogData) {

      actions$.pipe(
        ofType(
          GenreActionTypes.AddGenreSuccess,
          GenreActionTypes.UpdateGenreSuccess,
          GenreActionTypes.DeleteGenreSuccess),
        takeUntil(this.destroyed$)
     )
     .subscribe(() => {
        this.isLoading = false;
        this.dialogRef.close();
     });

     actions$.pipe(
      ofType(
        GenreActionTypes.AddGenreError,
        GenreActionTypes.UpdateGenreError,
        GenreActionTypes.DeleteGenreError),
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
    this.form = this.fb.group<GenreForm>({
      nome: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  populateForm() {
    this.form.patchValue({
      nome: this.data.genre.nome
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) { return };
    this.isLoading = true;
    switch (this.data.action) {
      case 'ADD':
        this.addGenre();
        break;
      case 'UPDATE':
        this.updateGenre();
        break;
      case 'DELETE':
        this.deleteGenre();
        break;
      default:
        this.isLoading = false;
        break;
    }
  }

  addGenre() {
    this.store.dispatch(new AddGenre({data: this.form.value}))
  }

  updateGenre() {
    const payload = Object.assign({}, this.data.genre, this.form.value)
    this.store.dispatch(new UpdateGenre({data: payload}))
  }
  
  deleteGenre() {
    this.store.dispatch(new DeleteGenre({id: this.data.genre.id}))
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

export interface GenreForm {
  nome: FormControl<string | null>
}

export enum ReqActions {
  'ADD' = 'Adicionar',
  'UPDATE' = 'Atualizar',
  'DELETE' = 'Remover'
}