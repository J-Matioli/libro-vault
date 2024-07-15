import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { Publisher, PublisherResponse } from '../models/publisher';
import { Data } from '../models/data';
import { Store } from '@ngrx/store';
import { RequestFinishLoaderPublisher, RequestLoaderPublisher } from 'src/app/features/publishers/store/actions/publisher-loader.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddPublisherError, DeletePublisherError, UpdatePublisherError } from 'src/app/features/publishers/store/actions/publisher.actions';


@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(
    private http: HttpClient,
    private store: Store,
    private snackBar: MatSnackBar,
  ) { }

  getPublisher(params?: string): Observable<PublisherResponse<{dados: Data, pagina: Publisher[]} | null>>  {
    this.store.dispatch(new RequestLoaderPublisher())
    return this.http.get<PublisherResponse<{dados: Data, pagina: Publisher[]} | null>>(`${this.apiUrl}editoras?${params || ''}`)
      .pipe(
        finalize(() => this.store.dispatch(new RequestFinishLoaderPublisher()))
      )
  }

  postPublisher(publisher: Publisher): Observable<PublisherResponse<Publisher>> {
    return this.http.post<PublisherResponse<Publisher>>(`${this.apiUrl}editoras`, publisher)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError((err: HttpErrorResponse) => {
          this.store.dispatch(new AddPublisherError())
          this.openSnackBar(err.error?.erros[0])
          return throwError(() => err)
        })
      )
  }

  updatePublisher(publisher: Publisher): Observable<PublisherResponse<Publisher>> {
    return this.http.put<PublisherResponse<Publisher>>(`${this.apiUrl}editoras`, publisher)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError(err => {
          this.store.dispatch(new UpdatePublisherError())
          this.openSnackBar(err.error?.erros[0])
          return throwError(() => err)
        })
      )
  }

  deletePublisher(id: string): Observable<PublisherResponse<Publisher>> {
    return this.http.delete<PublisherResponse<Publisher>>(`${this.apiUrl}editoras/${id}`)
      .pipe(
        tap(res => this.openSnackBar(res.mensagem[0])),
        catchError(err => {
          this.store.dispatch(new DeletePublisherError())
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