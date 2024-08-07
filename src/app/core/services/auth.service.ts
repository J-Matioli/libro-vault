import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthResponse, ChangePasswordResponse, RegisterResponse, EmailConfirmResponse, ResetPasswordEmailResponse, ResetPasswordResponse } from '../models/auth';
import { User, UserResponse } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private cookieService: CookieService
  ) { }

  login(data: {email: string, senha: string}): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}autenticacao/login`, data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  register(data: any): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}usuario/cadastro-usuario`, data)
      .pipe(catchError(err => {
          this.openSnackBar(err.error.erros[0])
        return throwError(() => err)
      }))
  }

  resetPassword(data: any): Observable<ResetPasswordResponse> {
    return this.http.post<ResetPasswordResponse>(`${this.apiUrl}usuario/resetar-senha`, data)
      .pipe(catchError(err => {
          this.openSnackBar(err.error.erros[0])
        return throwError(() => err)
      }))
  }

  changePassword(data: any): Observable<ChangePasswordResponse> {
    return this.http.post<ChangePasswordResponse>(`${this.apiUrl}usuario/alterar-senha`, data)
      .pipe(catchError(err => {
          this.openSnackBar(err.error.erros[0])
        return throwError(() => err)
      }))
  }

  sendEmailResetPassword(data: FormData): Observable<ResetPasswordEmailResponse> {
    return this.http.post<ResetPasswordEmailResponse>(`${this.apiUrl}usuario/resetar-senha-email`, data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  emailConfirmation(data: any): Observable<EmailConfirmResponse> {
    return this.http.post<EmailConfirmResponse>(`${this.apiUrl}usuario/confirmar-cadastro`, data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  reSendEmailConfirmation(data: FormData): Observable<EmailConfirmResponse> {
    return this.http.post<EmailConfirmResponse>(`${this.apiUrl}usuario/reenviar-confirmacao-email`, data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  getUser(): Observable<UserResponse> {
    const id = this.cookieService.get('_id')
    return this.http.get<UserResponse>(`${this.apiUrl}usuario/usuario?id=${id}`)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}usuario/atualiza-usuario`, user)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }


  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
