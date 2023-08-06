import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsDetailsComponent } from './hqs-details.component';

describe('HqsDetailsComponent', () => {
  let component: HqsDetailsComponent;
  let fixture: ComponentFixture<HqsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
