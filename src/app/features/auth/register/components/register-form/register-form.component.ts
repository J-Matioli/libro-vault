import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUtils } from 'src/app/core/utils/form-utils';
import { CustomValidators } from 'src/app/core/validators/custom-validators.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent extends FormUtils implements OnInit {
  
  public form!: FormGroup<RegisterForm>;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Input() isLoading: boolean = false;

  constructor(private fb: FormBuilder) { super(); }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group<RegisterForm>({
      nome: new FormControl(null, {validators: [
        Validators.required,
        Validators.pattern(/^\p{L}+(?: \p{L}+)*$/u), //RegExp to validate spaces at the beginning and end of the string
        Validators.maxLength(100)
      ]}),
      genero: new FormControl(null, {validators: [Validators.required]}),
      dataDeNascimento: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)]}),
      senha: new FormControl(null, {validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        CustomValidators.hasLowerChar(),
        CustomValidators.hasUpperChar(),
        CustomValidators.hasNumber(),
        CustomValidators.hasSymbol(/^(?=.*[!@#$%*^&+=?{}/,.()~<>'`´;:])/g)
      ]}),
      confirmarSenha: new FormControl(null, {validators: [Validators.required]})
    },
    {
      validators: [CustomValidators.passwordMatch('senha', 'confirmarSenha')]
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