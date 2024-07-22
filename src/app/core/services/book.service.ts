import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Work, WorkResponse } from '../models/work';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AddBookError } from 'src/app/features/books/store/actions/book.actions';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(
    private http: HttpClient,
    private store: Store,
    private snackBar: MatSnackBar,
  ) { }

  postWork(work: Work): Observable<WorkResponse<Work>> {
    return this.http.post<WorkResponse<Work>>(`${this.apiUrl}obras`, work)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError((err: HttpErrorResponse) => {
          this.store.dispatch(new AddBookError())
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
