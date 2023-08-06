import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsListComponent } from './hqs-list.component';

describe(HqsListComponent.name, () => {
  let component: HqsListComponent;
  let fixture: ComponentFixture<HqsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
