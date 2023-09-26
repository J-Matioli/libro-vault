import { TestBed } from '@angular/core/testing';

import { PublisherService } from './publisher.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(PublisherService.name, () => {
  let service: PublisherService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PublisherService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
