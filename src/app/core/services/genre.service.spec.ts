import { TestBed } from '@angular/core/testing';

import { GenreService } from './genre.service';
import { GenreReducer } from 'src/app/features/genres/store/reducer/genre';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { genreMock, genreResponseMock, getGenreResponseMock } from '../test/genre-test';
import { HttpErrorResponse } from '@angular/common/http';
import { Genre } from '../models/genre';

describe('GenreService', () => {
  let service: GenreService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}), 
        MatSnackBarModule,
        StoreModule.forFeature('genre', GenreReducer),
      ]
    });
    service = TestBed.inject(GenreService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${GenreService.prototype.getGenre.name} should return 2 genres`, () => {
    service.getGenre().subscribe(genres => {
      expect(genres.dados!.pagina.length).toBe(2);
    })
    httpController 
      .expectOne({
        method: 'GET',
        url: 'https://librovaultapi.fickert.space/v1/generos?'
      })
      .flush(getGenreResponseMock(2))
  })

  it(`#${GenreService.prototype.postGenre.name} should return correct genre name`, () => {
    service.postGenre(genreMock()).subscribe(response => {      
      expect(response.dados.nome).toBe(genreMock().nome);
    })
    httpController 
      .expectOne({
        method: 'POST',
        url: 'https://librovaultapi.fickert.space/v1/generos'
      })
      .flush(genreResponseMock(genreMock()))
  })

  it(`#${GenreService.prototype.postGenre.name} should return correct error value`, () => {
    service.postGenre(genreMock()).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'POST',
        url: 'https://librovaultapi.fickert.space/v1/generos'
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })

  it(`#${GenreService.prototype.updateGenre.name} should return new correct genre name`, () => {
    const genre: Genre = genreMock()
    
    service.updateGenre(genre).subscribe(response => {      
      expect(response.dados.nome).not.toBe(genre.nome);
    })
    httpController 
      .expectOne({
        method: 'PUT',
        url: 'https://librovaultapi.fickert.space/v1/generos'
      })
      .flush(genreResponseMock({
        ...genre,
        nome: 'Genre updated'
      }))
  })

  it(`#${GenreService.prototype.updateGenre.name} should return correct error value`, () => {
    service.updateGenre(genreMock()).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'PUT',
        url: 'https://librovaultapi.fickert.space/v1/generos'
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })

  it(`#${GenreService.prototype.deleteGenre.name} should delete genre`, () => {
    const genre: Genre = genreMock();
    
    service.deleteGenre(genre.id).subscribe(response => {
      expect(response.dados.id).toBe(genre.id);
    })
    httpController 
      .expectOne({
        method: 'DELETE',
        url: 'https://librovaultapi.fickert.space/v1/generos/' + genre.id
      })
      .flush(genreResponseMock({
        ...genre,
        nome: 'Genre updated'
      }))
  })

  it(`#${GenreService.prototype.deleteGenre.name} should return correct error value`, () => {
    const genre: Genre = genreMock();

    service.deleteGenre(genre.id).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'DELETE',
        url: 'https://librovaultapi.fickert.space/v1/generos/' + genre.id
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })
});
