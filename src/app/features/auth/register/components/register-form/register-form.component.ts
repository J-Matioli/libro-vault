import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  
  public form!: FormGroup<RegisterForm>;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group<RegisterForm>({
      nome: new FormControl(null, {validators: [Validators.required]}),
      genero: new FormControl(null, {validators: [Validators.required]}),
      dataDeNascimento: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      senha: new FormControl(null, {validators: [Validators.required]}),
      confirmarSenha: new FormControl(null, {validators: [Validators.required]})
    })
  }

  submit() {
    if(this.form.valid) {     
      this.formSubmit.emit(this.form.value)
    }
  }
}

export interface RegisterForm {
  nome: FormControl<string | null>
  genero: FormControl<string | null>
  dataDeNascimento: FormControl<string | null>
  email: FormControl<string | null>
  senha: FormControl<string | null>
  confirmarSenha: FormControl<string | null>
}