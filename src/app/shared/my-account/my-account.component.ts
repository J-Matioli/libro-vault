import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUtils } from 'src/app/core/utils/form-utils';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent  extends FormUtils implements OnInit {

  public form!: FormGroup<MyAccountForm>;
  public formIsdisabled: boolean = true;

  constructor(private fb: FormBuilder) { super(); }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group<MyAccountForm>({
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
        Validators.maxLength(100)]})
    })

    this.form.disable()
  }

  submit() {
    if(this.form.valid) { }
  }

  toggleForm() {
    this.formIsdisabled = !this.formIsdisabled;

    if (this.formIsdisabled) {
      this.resetForm();
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  resetForm() {
    this.form.patchValue({
      nome: '',
      email: '',
      genero: '',
      dataDeNascimento: ''
    })
  }

}

export interface MyAccountForm {
  nome: FormControl<string | null>
  genero: FormControl<string | null>
  dataDeNascimento: FormControl<string | null>
  email: FormControl<string | null>
}