import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsComponent } from './hqs.component';

describe(HqsComponent.name, () => {
  let component: HqsComponent;
  let fixture: ComponentFixture<HqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
