import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomValidators } from 'src/app/core/validators/custom-validators.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public form!: FormGroup<ChangePasswordForm>;
  public isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group<ChangePasswordForm>({
      senhaAntiga: new FormControl(null, {validators: [Validators.required]}),
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
      validators: [CustomValidators.passwordMatch('novaSenha', 'confirmarSenha')]
    })
  }
  
  get senhaAntiga() { return this.form.get('senhaAntiga'); }
  get novaSenha() { return this.form.get('novaSenha'); }
  get confirmarSenha() { return this.form.get('confirmarSenha'); }

  submit() {
    this.form.markAllAsTouched();
    if(!this.form.valid) { return; }

    this.isLoading = true;
    this.authService.changePassword(this.form.value).subscribe({
      next: res => {
        this.isLoading = false;
        this.dialogRef.close();
        this.snackBar.open(res['mensagem'][0], undefined, {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        })
      },
       error: err => {
        this.isLoading = false;
       }
    })
  } 
}

export interface ChangePasswordForm {
  senhaAntiga: FormControl<string | null>
  novaSenha: FormControl<string | null>
  confirmarSenha: FormControl<string | null>
}