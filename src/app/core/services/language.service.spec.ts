import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { languageReducer } from '../store/reducers/language';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}), 
        MatSnackBarModule,
        StoreModule.forFeature('language', languageReducer),
      ]
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
