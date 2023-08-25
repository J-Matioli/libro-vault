import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { BooksModule } from '../books.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(BooksListComponent.name, () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BooksModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
