import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { LoginComponent } from './login/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,    
    FormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
