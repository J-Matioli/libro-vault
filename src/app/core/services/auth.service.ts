import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  login(data: {email: string, senha: string}): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>(`${this.apiUrl}autenticacao/login`, data)
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

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
