import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { SendEmailComponent } from './features/auth/send-email/send-email.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './features/auth/confirm-email/confirm-email.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { toolbar: false, footer: false  } },
  { path: 'register', component: RegisterComponent, data: { toolbar: false, footer: false  } },
  { path: 'send-email', component: SendEmailComponent, data: { toolbar: false, footer: false  } },
  { path: 'confirm-email', component: ConfirmEmailComponent, data: { toolbar: false, footer: false  } },
  { path: 'reset-password', component: ResetPasswordComponent, data: { toolbar: false, footer: false  } },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'editoras', loadChildren: () => import('./features/publishers/publishers.module').then(m => m.PublishersModule), canActivate: [AuthGuard] },
  { path: 'autores', loadChildren: () => import('./features/authors/authors.module').then(m => m.AuthorsModule), canActivate: [AuthGuard] },
  { path: 'livros', loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule), canActivate: [AuthGuard] },
  { path: 'mangas', loadChildren: () => import('./features/mangas/mangas.module').then(m => m.MangasModule), canActivate: [AuthGuard] },
  { path: 'estantes', loadChildren: () => import('./features/shelf/shelf.module').then(m => m.ShelfModule), canActivate: [AuthGuard] },
  { path: 'hqs', loadChildren: () => import('./features/hqs/hqs.module').then(m => m.HqsModule), canActivate: [AuthGuard] },
  { path: 'generos', loadChildren: () => import('./features/genres/genres.module').then(m => m.GenresModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
