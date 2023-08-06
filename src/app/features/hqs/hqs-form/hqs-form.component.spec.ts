import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsFormComponent } from './hqs-form.component';

describe('HqsFormComponent', () => {
  let component: HqsFormComponent;
  let fixture: ComponentFixture<HqsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
