import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher, PublisherResponse } from '../models/publisher';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(private http: HttpClient) { }

  getPublisher(): Observable<PublisherResponse<{dados: Data, pagina: Publisher[]} | null>>  {
    return this.http.get<PublisherResponse<{dados: Data, pagina: Publisher[]} | null>>(`${this.apiUrl}editoras`)
  }

  postPublisher(publisher: any): Observable<PublisherResponse<Publisher>> {
    return this.http.post<PublisherResponse<Publisher>>(`${this.apiUrl}editoras`, publisher)
  }
}
