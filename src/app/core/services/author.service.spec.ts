import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { authorReducer } from 'src/app/features/authors/store/reducer/author';
import { Author } from '../models/author';
import { getAuthorResponseMock, authorMock, authorResponseMock } from '../test/author-test';

describe(AuthorService.name, () => {
  let service: AuthorService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}), 
        MatSnackBarModule,
        StoreModule.forFeature('author', authorReducer),
      ]
    });
    service = TestBed.inject(AuthorService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${AuthorService.prototype.getAuthor.name} should return 2 authors`, () => {
    service.getAuthor().subscribe(authors => {
      expect(authors.dados!.pagina.length).toBe(2);
    })
    httpController 
      .expectOne({
        method: 'GET',
        url: 'https://librovaultapi.fickert.space/v1/autores?'
      })
      .flush(getAuthorResponseMock(2))
  })

  it(`#${AuthorService.prototype.postAuthor.name} should return correct author name`, () => {
    service.postAuthor(authorMock()).subscribe(response => {      
      expect(response.dados.nome).toBe(authorMock().nome);
    })
    httpController 
      .expectOne({
        method: 'POST',
        url: 'https://librovaultapi.fickert.space/v1/autores'
      })
      .flush(authorResponseMock(authorMock()))
  })

  it(`#${AuthorService.prototype.postAuthor.name} should return correct error value`, () => {
    service.postAuthor(authorMock()).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'POST',
        url: 'https://librovaultapi.fickert.space/v1/autores'
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })

  it(`#${AuthorService.prototype.updateAuthor.name} should return new correct author name`, () => {
    const author: Author = authorMock()
    
    service.updateAuthor(author).subscribe(response => {      
      expect(response.dados.nome).not.toBe(author.nome);
    })
    httpController 
      .expectOne({
        method: 'PUT',
        url: 'https://librovaultapi.fickert.space/v1/autores'
      })
      .flush(authorResponseMock({
        ...author,
        nome: 'Author updated'
      }))
  })

  it(`#${AuthorService.prototype.updateAuthor.name} should return correct error value`, () => {
    service.updateAuthor(authorMock()).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'PUT',
        url: 'https://librovaultapi.fickert.space/v1/autores'
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })

  it(`#${AuthorService.prototype.deleteAuthor.name} should delete author`, () => {
    const author: Author = authorMock();
    
    service.deleteAuthor(author.id).subscribe(response => {
      expect(response.dados.id).toBe(author.id);
    })
    httpController 
      .expectOne({
        method: 'DELETE',
        url: 'https://librovaultapi.fickert.space/v1/autores/' + author.id
      })
      .flush(authorResponseMock({
        ...author,
        nome: 'Author updated'
      }))
  })

  it(`#${AuthorService.prototype.deleteAuthor.name} should return correct error value`, () => {
    const author: Author = authorMock();

    service.deleteAuthor(author.id).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'DELETE',
        url: 'https://librovaultapi.fickert.space/v1/autores/' + author.id
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })
});
