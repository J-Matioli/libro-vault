import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInfoFieldComponent } from './details-info-field.component';

describe('DetailsInfoFieldComponent', () => {
  let component: DetailsInfoFieldComponent;
  let fixture: ComponentFixture<DetailsInfoFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInfoFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsInfoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
