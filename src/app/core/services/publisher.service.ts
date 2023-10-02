import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { Publisher, PublisherResponse } from '../models/publisher';
import { Data } from '../models/data';
import { Store } from '@ngrx/store';
import { RequestFinishLoaderPublisher, RequestLoaderPublisher } from 'src/app/features/publishers/store/actions/loader.actions';


@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getPublisher(params?: string): Observable<PublisherResponse<{dados: Data, pagina: Publisher[]} | null>>  {
    this.store.dispatch(new RequestLoaderPublisher({}))
    return this.http.get<PublisherResponse<{dados: Data, pagina: Publisher[]} | null>>(`${this.apiUrl}editoras?${params || ''}`)
      .pipe(
        finalize(() => this.store.dispatch(new RequestFinishLoaderPublisher({})))
      )
  }

  postPublisher(publisher: any): Observable<PublisherResponse<Publisher>> {
    return this.http.post<PublisherResponse<Publisher>>(`${this.apiUrl}editoras`, publisher)
  }
}
