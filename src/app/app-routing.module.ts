import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ResetPasswordEmailComponent } from './features/auth/reset-password-email/reset-password-email.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { toolbar: false, footer: false  } },
  { path: 'register', component: RegisterComponent, data: { toolbar: false, footer: false  } },
  { path: 'reset-password-email', component: ResetPasswordEmailComponent, data: { toolbar: false, footer: false  } },
  { path: 'reset-password', component: ResetPasswordComponent, data: { toolbar: false, footer: false  } },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'editoras', loadChildren: () => import('./features/publishers/publishers.module').then(m => m.PublishersModule) },
  { path: 'autores', loadChildren: () => import('./features/authors/authors.module').then(m => m.AuthorsModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
