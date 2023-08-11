import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/components/register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { ResetPasswordEmailComponent } from './reset-password-email/reset-password-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './reset-password/components/reset-password-form/reset-password-form.component';
import { ResetPasswordEmailFormComponent } from './reset-password-email/components/reset-password-email-form/reset-password-email-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent,
    ResetPasswordEmailComponent,
    ResetPasswordFormComponent,
    ResetPasswordComponent,
    ResetPasswordEmailFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,    
    FormsModule,
    SharedModule
  ],
  providers: [   
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
  ]
})
export class AuthModule { }
