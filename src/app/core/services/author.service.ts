import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../models/data';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, finalize, tap, catchError, throwError } from 'rxjs';
import { RequestLoaderAuthor, RequestFinishLoaderAuthor } from 'src/app/features/authors/store/actions/author-loader.actions';
import { AddAuthorError, UpdateAuthorError, DeleteAuthorError } from 'src/app/features/authors/store/actions/author.actions';
import { AuthorResponse, Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(
    private http: HttpClient,
    private store: Store,
    private snackBar: MatSnackBar,
  ) { }

  getAuthor(params?: string): Observable<AuthorResponse<{dados: Data, pagina: Author[]} | null>>  {
    this.store.dispatch(new RequestLoaderAuthor())
    return this.http.get<AuthorResponse<{dados: Data, pagina: Author[]} | null>>(`${this.apiUrl}autores?${params || ''}`)
      .pipe(
        finalize(() => this.store.dispatch(new RequestFinishLoaderAuthor()))
      )
  }

  postAuthor(author: Author): Observable<AuthorResponse<Author>> {
    return this.http.post<AuthorResponse<Author>>(`${this.apiUrl}autores`, author)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError((err: HttpErrorResponse) => {
          this.store.dispatch(new AddAuthorError())
          this.openSnackBar(err.error?.erros[0])
          return throwError(() => err)
        })
      )
  }

  updateAuthor(author: Author): Observable<AuthorResponse<Author>> {
    return this.http.put<AuthorResponse<Author>>(`${this.apiUrl}autores`, author)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError(err => {
          this.store.dispatch(new UpdateAuthorError())
          this.openSnackBar(err.error?.erros[0])
          return throwError(() => err)
        })
      )
  }

  deleteAuthor(id: string): Observable<AuthorResponse<Author>> {
    return this.http.delete<AuthorResponse<Author>>(`${this.apiUrl}autores/${id}`)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError(err => {
          this.store.dispatch(new DeleteAuthorError())
          this.openSnackBar(err.error?.erros[0])
          return throwError(() => err)
        })
      )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}