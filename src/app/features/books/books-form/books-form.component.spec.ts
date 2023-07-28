import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFormComponent } from './books-form.component';

describe(BooksFormComponent.name, () => {
  let component: BooksFormComponent;
  let fixture: ComponentFixture<BooksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
