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
      usuario: new FormControl(null, {validators: [Validators.required]}),
      senha: new FormControl(null, {validators: [Validators.required]}),
    })
  }

  get usuario() { return this.form.get('usuario'); }
  get senha() { return this.form.get('senha'); }

  submit() {
    if(this.form.valid) {     
      this.formSubmit.emit(this.form.value)
    }
  }

}

export interface LoginForm {
  usuario: FormControl<string | null>
  senha: FormControl<string | null>
}