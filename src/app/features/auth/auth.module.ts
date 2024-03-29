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
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './reset-password/components/reset-password-form/reset-password-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendEmailFormComponent } from './send-email/components/send-email-form/send-email-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    SendEmailComponent,
    ResetPasswordFormComponent,
    ResetPasswordComponent,
    SendEmailFormComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,    
    MatRadioModule,
    FormsModule,
    SharedModule
  ],
  providers: [   
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
  ]
})
export class AuthModule { }
