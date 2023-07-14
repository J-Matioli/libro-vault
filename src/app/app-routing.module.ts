import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ChangePasswordEmailComponent } from './features/auth/change-password-email/change-password-email.component';
import { ChangePasswordComponent } from './features/auth/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { toolbar: false, footer: false  } },
  { path: 'register', component: RegisterComponent, data: { toolbar: false, footer: false  } },
  { path: 'change-password-email', component: ChangePasswordEmailComponent, data: { toolbar: false, footer: false  } },
  { path: 'change-password', component: ChangePasswordComponent, data: { toolbar: false, footer: false  } },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
