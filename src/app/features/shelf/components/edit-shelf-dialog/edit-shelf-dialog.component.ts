import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ShelfDialogData {
  action: 'UPDATE' | 'DELETE';
  shelf: any;
}

@Component({
  selector: 'app-edit-shelf-dialog',
  templateUrl: './edit-shelf-dialog.component.html',
  styleUrls: ['./edit-shelf-dialog.component.scss']
})
export class EditShelfDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ShelfDialogData
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {    
    this.form = this.fb.group({
      estante: new FormControl(this.data.shelf.titulo, { validators: [Validators.required] }),
    })
  }

  get estante() { return this.form.get('estante'); }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }

  deleteShelf() {
    console.log(this.data.action, this.data.shelf.id)
  }
}
