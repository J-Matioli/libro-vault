import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  public actions: typeof Actions = Actions;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: GenreDialogData
  ) { }

  ngOnInit(): void {
    this.createForm();
    if(this.data.action === 'UPDATE') {
      this.populateForm();
    }
  }

  get genero() { return this.form.get('genero'); }

  createForm(): void {
    this.form = this.fb.group<GenreForm>({
      genero: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  populateForm() {        
    this.form.patchValue({
      genero: this.data.genre.name
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.data.action, this.form.value)
    }
  }

  deleteGenre() {
    console.log(this.data.action, this.data.genre.id)
  }

}

export interface GenreForm {
  genero: FormControl<string | null>
}

export enum Actions {
  'ADD' = 'Adicionar',
  'UPDATE' = 'Atualizar',
  'DELETE' = 'Remover'
}