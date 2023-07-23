import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PublisherDialogData {
  action: 'ADD' | 'UPDATE' | 'DELETE';
  publisher: any;
}

@Component({
  selector: 'app-publisher-form-dialog',
  templateUrl: './publisher-form-dialog.component.html',
  styleUrls: ['./publisher-form-dialog.component.scss']
})
export class PublisherFormDialogComponent implements OnInit {
  public actions: typeof Actions = Actions;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: PublisherDialogData) { }

  ngOnInit(): void {
    this.createForm();
    if(this.data.action === 'UPDATE') {
      this.populateForm();
    }
  }

  get editora() { return this.form.get('editora'); }

  createForm(): void {
    this.form = this.fb.group<PublisherForm>({
      editora: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  populateForm() {
    this.form.patchValue({
      editora: this.data.publisher.name
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.data.action, this.form.value)
    }
  }

  deletePublisher() {
    console.log(this.data.action, this.data.publisher.id)
  }
}

export interface PublisherForm {
  editora: FormControl<string | null>
}

export enum Actions {
  'ADD' = 'Adicionar',
  'UPDATE' = 'Atualizar',
  'DELETE' = 'Remover'
}