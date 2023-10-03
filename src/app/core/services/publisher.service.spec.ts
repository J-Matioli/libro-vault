import { TestBed } from '@angular/core/testing';

import { PublisherService } from './publisher.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { publisherReducer } from 'src/app/features/publishers/store/reducer/publisher';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe(PublisherService.name, () => {
  let service: PublisherService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
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
});
