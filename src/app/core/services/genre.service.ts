import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { RequestFinishLoaderGenre, RequestLoaderGenre } from 'src/app/features/genres/store/actions/genre-loader.actions';
import { Genre, GenreResponse } from '../models/genre';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { Data } from '../models/data';
import { AddGenreError, DeleteGenreError, UpdateGenreError } from 'src/app/features/genres/store/actions/genre.actions';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(
    private http: HttpClient,
    private store: Store,
    private snackBar: MatSnackBar,
  ) { }

  getGenre(params?: string): Observable<GenreResponse<{dados: Data, pagina: Genre[]} | null>>  {
    this.store.dispatch(new RequestLoaderGenre())
    return this.http.get<GenreResponse<{dados: Data, pagina: Genre[]} | null>>(`${this.apiUrl}generos?${params || ''}`)
      .pipe(
        finalize(() => this.store.dispatch(new RequestFinishLoaderGenre()))
      )
  }

  postGenre(Genre: Genre): Observable<GenreResponse<Genre>> {
    return this.http.post<GenreResponse<Genre>>(`${this.apiUrl}generos`, Genre)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError((err: HttpErrorResponse) => {
          this.store.dispatch(new AddGenreError())
          this.openSnackBar(err.error?.erros[0])
          return throwError(() => err)
        })
      )
  }

  updateGenre(Genre: Genre): Observable<GenreResponse<Genre>> {
    return this.http.put<GenreResponse<Genre>>(`${this.apiUrl}generos`, Genre)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError(err => {
          this.store.dispatch(new UpdateGenreError())
          this.openSnackBar(err.error?.erros[0])
          return throwError(() => err)
        })
      )
  }

  deleteGenre(id: string): Observable<GenreResponse<Genre>> {
    return this.http.delete<GenreResponse<Genre>>(`${this.apiUrl}generos/${id}`)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError(err => {
          this.store.dispatch(new DeleteGenreError())
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
