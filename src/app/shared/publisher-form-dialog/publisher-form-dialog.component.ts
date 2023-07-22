import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  action: 'ADD' | 'UPDATE' | 'DELETE';
  publisher: any;
  name: string;
}

@Component({
  selector: 'app-publisher-form-dialog',
  templateUrl: './publisher-form-dialog.component.html',
  styleUrls: ['./publisher-form-dialog.component.scss']
})
export class PublisherFormDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.createForm();    
  }

  get editora() { return this.form.get('editora'); }  

  createForm(): void {
    this.form = this.fb.group<PublisherForm>({
      editora: new FormControl(null, {validators: [Validators.required]}),
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.valid) {     
      
    }
  }

  deletePublisher() {

  }
}

export interface PublisherForm {
  editora: FormControl<string | null>  
}