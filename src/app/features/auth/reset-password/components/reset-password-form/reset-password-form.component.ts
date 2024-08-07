import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/validators/custom-validators.component';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  public form!: FormGroup<ResetPasswordForm>;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Input() isLoading: boolean = false;

  constructor(
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit(): void { }

  createForm(): void {
    this.form = this.fb.group<ResetPasswordForm>({
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

  get novaSenha() { return this.form.get('novaSenha'); }
  get confirmarSenha() { return this.form.get('confirmarSenha'); }

  submit() {
    if(this.form.valid) {     
      this.formSubmit.emit(this.form.value)
    }
  }

}

export interface ResetPasswordForm {
  novaSenha: FormControl<string | null>
  confirmarSenha: FormControl<string | null>
}