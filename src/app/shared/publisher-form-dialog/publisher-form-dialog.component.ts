import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Publisher } from 'src/app/core/models/publisher';
import { AddPublisher, DeletePublisher, PublisherActionTypes, UpdatePublisher } from 'src/app/features/publishers/store/actions/publisher.actions';


export interface PublisherDialogData {
  action: 'ADD' | 'UPDATE' | 'DELETE';
  publisher: Publisher;
}

@Component({
  selector: 'app-publisher-form-dialog',
  templateUrl: './publisher-form-dialog.component.html',
  styleUrls: ['./publisher-form-dialog.component.scss']
})
export class PublisherFormDialogComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  destroyed$ = new Subject<boolean>();
  public actions: typeof ReqActions = ReqActions;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialogRef: MatDialogRef<PublisherFormDialogComponent>,
    actions$: Actions,
    @Inject(MAT_DIALOG_DATA) public data: PublisherDialogData) {

      actions$.pipe(
        ofType(
          PublisherActionTypes.AddPublisherSuccess,
          PublisherActionTypes.UpdatePublisherSuccess,
          PublisherActionTypes.DeletePublisherSuccess),
        takeUntil(this.destroyed$)
     )
     .subscribe(() => {
        this.isLoading = false;
        this.dialogRef.close();
     });

     actions$.pipe(
      ofType(
        PublisherActionTypes.AddPublisherError,
        PublisherActionTypes.UpdatePublisherError,
        PublisherActionTypes.DeletePublisherError),
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
    this.form = this.fb.group<PublisherForm>({
      nome: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  populateForm() {
    this.form.patchValue({
      nome: this.data.publisher.nome
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) { return };
    this.isLoading = true;
    switch (this.data.action) {
      case 'ADD':
        this.addPublisher();
        break;
      case 'UPDATE':
        this.updatePublisher();
        break;
      case 'DELETE':
        this.deletePublisher();
        break;
      default:
        this.isLoading = false;
        break;
    }
  }

  addPublisher() {
    this.store.dispatch(new AddPublisher({data: this.form.value}))
  }

  updatePublisher() {
    const payload = Object.assign({}, this.data.publisher, this.form.value)
    this.store.dispatch(new UpdatePublisher({data: payload}))
  }
  
  deletePublisher() {
    this.store.dispatch(new DeletePublisher({id: this.data.publisher.id}))
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

export interface PublisherForm {
  nome: FormControl<string | null>
}

export enum ReqActions {
  'ADD' = 'Adicionar',
  'UPDATE' = 'Atualizar',
  'DELETE' = 'Remover'
}