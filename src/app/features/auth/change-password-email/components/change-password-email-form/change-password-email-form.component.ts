import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-email-form',
  templateUrl: './change-password-email-form.component.html',
  styleUrls: ['./change-password-email-form.component.scss']
})
export class ChangePasswordEmailFormComponent implements OnInit {
  public form!: FormGroup<EmailForm>;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit(): void { }

  createForm(): void {
    this.form = this.fb.group<EmailForm>({
      email: new FormControl(null, {validators: [Validators.required]}),
    })
  }

  get email() { return this.form.get('email'); }  

  submit() {
    if(this.form.valid) {     
      this.formSubmit.emit(this.form.value)
    }
  }

}

export interface EmailForm {
  email: FormControl<string | null>
}