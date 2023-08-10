import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: {email: string, senha: string}): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>('https://librovaultapi.fickert.space/v1/autenticacao/login', data)
  }

  register(data: any): Observable<{[key: string]: any}> {
    return this.http.post<{[key: string]: any}>('https://librovaultapi.fickert.space/v1/autenticacao/cadastro-usuario', data)
  }
}
