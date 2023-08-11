import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  login(data: {email: string, senha: string}): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>('https://librovaultapi.fickert.space/v1/autenticacao/login', data)
    .pipe(catchError(err => {
      this.openSnackBar(err.error.erros[0])
      return throwError(() => err)
    }))
  }

  register(data: any): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>('https://librovaultapi.fickert.space/v1/autenticacao/cadastro-usuario', data)
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
