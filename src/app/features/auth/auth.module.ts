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
import { ChangePasswordEmailComponent } from './change-password-email/change-password-email.component';
import { ChangePasswordEmailFormComponent } from './change-password-email/components/change-password-email-form/change-password-email-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordFormComponent } from './change-password/components/change-password-form/change-password-form.component';

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
    ChangePasswordEmailComponent,
    ChangePasswordEmailFormComponent,
    ChangePasswordComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
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
