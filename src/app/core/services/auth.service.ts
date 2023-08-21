import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthResponse } from '../models/auth';
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

  register(data: any): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>(`${this.apiUrl}autenticacao/cadastro-usuario`, data)
      .pipe(catchError(err => {
          this.openSnackBar(err.error.erros[0])
        return throwError(() => err)
      }))
  }

  resetPassword(data: any): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>(`${this.apiUrl}usuario/resetar-senha`, data)
      .pipe(catchError(err => {
          this.openSnackBar(err.error.erros[0])
        return throwError(() => err)
      }))
  }

  changePassword(data: any): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>(`${this.apiUrl}usuario/alterar-senha`, data, this.authHeader())
      .pipe(catchError(err => {
          this.openSnackBar(err.error.erros[0])
        return throwError(() => err)
      }))
  }

  sendEmailResetPassword(data: FormData): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>(`${this.apiUrl}usuario/resetar-senha-email`, data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  emailConfirmation(data: any): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>(`${this.apiUrl}usuario/confirmar-cadastro`, data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  reSendEmailConfirmation(data: FormData): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>(`${this.apiUrl}usuario/reenviar-confirmacao-email`, data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  getUser(): Observable<UserResponse> {
    const id = this.cookieService.get('_id')
    return this.http.get<UserResponse>(`${this.apiUrl}usuario/usuario?id=${id}`, this.authHeader())
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}usuario/atualiza-usuario`, user, this.authHeader())
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  authHeader() {
    const token = this.cookieService.get('_token');

    return {
      headers: new HttpHeaders({
        "authorization": `bearer ${token}`
      })
    };
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
