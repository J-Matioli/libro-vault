import { TestBed } from '@angular/core/testing';

import { PublisherService } from './publisher.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { publisherReducer } from 'src/app/features/publishers/store/reducer/publisher';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { getPublisherResponseMock, publisherMock, publisherResponseMock } from '../test/publisher-test';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Publisher } from '../models/publisher';

describe(PublisherService.name, () => {
  let service: PublisherService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}), 
        MatSnackBarModule,
        StoreModule.forFeature('publisher', publisherReducer),
      ]
    });
    service = TestBed.inject(PublisherService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${PublisherService.prototype.getPublisher.name} should return 2 publishers`, () => {
    service.getPublisher().subscribe(publishers => {
      expect(publishers.dados!.pagina.length).toBe(2);
    })
    httpController 
      .expectOne({
        method: 'GET',
        url: 'https://librovaultapi.fickert.space/v1/editoras?'
      })
      .flush(getPublisherResponseMock(2))
  })

  it(`#${PublisherService.prototype.postPublisher.name} should return correct publisher name`, () => {
    service.postPublisher(publisherMock()).subscribe(response => {      
      expect(response.dados.nome).toBe(publisherMock().nome);
    })
    httpController 
      .expectOne({
        method: 'POST',
        url: 'https://librovaultapi.fickert.space/v1/editoras'
      })
      .flush(publisherResponseMock(publisherMock()))
  })

  it(`#${PublisherService.prototype.postPublisher.name} should return correct error value`, () => {
    service.postPublisher(publisherMock()).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'POST',
        url: 'https://librovaultapi.fickert.space/v1/editoras'
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })

  it(`#${PublisherService.prototype.updatePublisher.name} should return new correct publisher name`, () => {
    const publisher: Publisher = publisherMock()
    
    service.updatePublisher(publisher).subscribe(response => {      
      expect(response.dados.nome).not.toBe(publisher.nome);
    })
    httpController 
      .expectOne({
        method: 'PUT',
        url: 'https://librovaultapi.fickert.space/v1/editoras'
      })
      .flush(publisherResponseMock({
        ...publisher,
        nome: 'Publisher updated'
      }))
  })

  it(`#${PublisherService.prototype.updatePublisher.name} should return correct error value`, () => {
    service.updatePublisher(publisherMock()).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'PUT',
        url: 'https://librovaultapi.fickert.space/v1/editoras'
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })

  it(`#${PublisherService.prototype.deletePublisher.name} should delete publisher`, () => {
    const publisher: Publisher = publisherMock();
    
    service.deletePublisher(publisher.id).subscribe(response => {
      expect(response.dados.id).toBe(publisher.id);
    })
    httpController 
      .expectOne({
        method: 'DELETE',
        url: 'https://librovaultapi.fickert.space/v1/editoras/' + publisher.id
      })
      .flush(publisherResponseMock({
        ...publisher,
        nome: 'Publisher updated'
      }))
  })

  it(`#${PublisherService.prototype.deletePublisher.name} should return correct error value`, () => {
    const publisher: Publisher = publisherMock();

    service.deletePublisher(publisher.id).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.sucesso).toBeFalse();
      }
    })
    
    httpController 
      .expectOne({
        method: 'DELETE',
        url: 'https://librovaultapi.fickert.space/v1/editoras/' + publisher.id
      })
      .flush({
        sucesso: false,
        erros: ['Erro']
      }, {status: 400, statusText: 'OK'})
  })
});
