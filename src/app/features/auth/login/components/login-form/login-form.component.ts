import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public form!: FormGroup<LoginForm>;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group<LoginForm>({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      senha: new FormControl(null, {validators: [Validators.required]}),
    })
  }

  get email() { return this.form.get('email'); }
  get senha() { return this.form.get('senha'); }

  submit() {
    if(this.form.valid) {     
      this.formSubmit.emit(this.form.value)
    }
  }

}

export interface LoginForm {
  email: FormControl<string | null>
  senha: FormControl<string | null>
}