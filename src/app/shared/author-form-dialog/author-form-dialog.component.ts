import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  public actions: typeof Actions = Actions;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: AuthorDialogData) { }

  ngOnInit(): void {
    this.createForm();
    if(this.data.action === 'UPDATE') {
      this.populateForm();
    }
  }

  get autor() { return this.form.get('autor'); }

  createForm(): void {
    this.form = this.fb.group<AuthorForm>({
      autor: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  populateForm() {
    this.form.patchValue({
      autor: this.data.author.name
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.data.action, this.form.value)
    }
  }

  deleteauthor() {
    console.log(this.data.action, this.data.author.id)
  }
}

export interface AuthorForm {
  autor: FormControl<string | null>
}

export enum Actions {
  'ADD' = 'Adicionar',
  'UPDATE' = 'Atualizar',
  'DELETE' = 'Remover'
}