import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherResponse } from '../models/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private apiUrl = 'https://librovaultapi.fickert.space/v1/';

  constructor(private http: HttpClient) { }

  getPublisher(): Observable<PublisherResponse>  {
    return this.http.get<PublisherResponse>(`${this.apiUrl}editoras`)
  }
}
