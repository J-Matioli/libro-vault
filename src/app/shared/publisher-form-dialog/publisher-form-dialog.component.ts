import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublisherService } from 'src/app/core/services/publisher.service';

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
    private publisherService: PublisherService,
    @Inject(MAT_DIALOG_DATA) public data: PublisherDialogData) { }

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
      nome: this.data.publisher.name
    })
  }

  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) { return };
    console.log(this.data.action, this.form.value)
    
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
        break;
    }
  }

  addPublisher() {
    this.publisherService.postPublisher(this.form.value).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })
  }
  updatePublisher() {}
  deletePublisher() {
    console.log(this.data.action, this.data.publisher.id)
  }
}

export interface PublisherForm {
  nome: FormControl<string | null>
}

export enum Actions {
  'ADD' = 'Adicionar',
  'UPDATE' = 'Atualizar',
  'DELETE' = 'Remover'
}