import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { RequestUser } from 'src/app/core/store/actions/user.actions';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormUtils } from 'src/app/core/utils/form-utils';
import { selectUser } from 'src/app/core/store/selectors/user.selectors';
import { filter } from 'rxjs';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent  extends FormUtils implements OnInit {

  public isLoading = true;
  public form!: FormGroup<MyAccountForm>;
  public formIsdisabled: boolean = true;
  private user: User;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MyAccountComponent>,
    private store: Store,
    private authService: AuthService  
  ) { super(); }

  ngOnInit(): void {
    this.store.dispatch(new RequestUser());
    this.createForm();

    this.store.select(selectUser)
    .pipe(filter(user => Object.keys(user).length > 0))
    .subscribe({
      next: user => {
        this.user = user;
        this.isLoading = false;
        this.setForm();
    },
    error: err => { this.isLoading = false; }
    })
  }

  createForm(): void {
    this.form = this.fb.group<MyAccountForm>({
      nome: new FormControl(null, {validators: [
        Validators.required,
        Validators.pattern(/^\p{L}+(?: \p{L}+)*$/u), //RegExp to validate spaces at the beginning and end of the string
        Validators.maxLength(100)
      ]}),
      genero: new FormControl(null, {validators: [Validators.required]}),
      dataNascimento: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)]})
    })

    this.form.disable()
  }

  submit() {
    this.form.markAllAsTouched();
    if(!this.form.valid) { return }
    this.isLoading = true;
    const payload = Object.assign({}, this.user, this.form.value)

    this.authService.putUser(payload).subscribe({
      next: res => {
        this.user = res;
        this.isLoading = false;
        this.dialogRef.close();
      },
      error: err => { this.isLoading = false; }
    })
  }

  toggleForm() {
    this.formIsdisabled = !this.formIsdisabled;

    if (this.formIsdisabled) {
      this.setForm();
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  setForm() {
    this.form.patchValue({
      nome: this.user.nome || '',
      email: this.user.email || '',
      genero: this.user.genero || '',
      dataNascimento: this.user.dataNascimento || ''
    })
  }
}

export interface MyAccountForm {
  nome: FormControl<string | null>
  genero: FormControl<string | null>
  dataNascimento: FormControl<string | null>
  email: FormControl<string | null>
}