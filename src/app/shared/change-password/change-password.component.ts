import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/validators/custom-validators.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public form!: FormGroup<ChangePasswordForm>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group<ChangePasswordForm>({
      senha: new FormControl(null, {validators: [Validators.required]}),
      novaSenha: new FormControl(null, {validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        CustomValidators.hasLowerChar(),
        CustomValidators.hasUpperChar(),
        CustomValidators.hasNumber(),
        CustomValidators.hasSymbol(/^(?=.*[!@#$%*^&+=?{}/,.()~<>'`´;:])/g)
      ]}),
      confirmarSenha: new FormControl(null, {validators: [Validators.required]}),
    },
    {
      validators: [CustomValidators.passwordMatch('senha', 'confirmarSenha')]
    })
  }
  
  get senha() { return this.form.get('senha'); }
  get novaSenha() { return this.form.get('novaSenha'); }
  get confirmarSenha() { return this.form.get('confirmarSenha'); }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.valid) {     
      
    }
  }
}

export interface ChangePasswordForm {
  senha: FormControl<string | null>
  novaSenha: FormControl<string | null>
  confirmarSenha: FormControl<string | null>
}