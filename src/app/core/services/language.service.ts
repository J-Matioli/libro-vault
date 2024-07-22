import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, Observable } from 'rxjs';
import { Language, LanguageResponse } from '../models/language';
import { Data } from '../models/data';
import { RequestFinishLoaderLanguage, RequestLoaderLanguage } from '../store/actions/language.actions';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  private apiUrl = 'https://librovaultapi.fickert.space/v1/';
  
  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getLanguage(params?: string): Observable<LanguageResponse<{dados: Data, pagina: Language[]} | null>>  {
    this.store.dispatch(new RequestLoaderLanguage())
    return this.http.get<LanguageResponse<{dados: Data, pagina: Language[]} | null>>(`${this.apiUrl}idiomas?${params || ''}`)
      .pipe(
        finalize(() => this.store.dispatch(new RequestFinishLoaderLanguage()))
      )
  }
}
