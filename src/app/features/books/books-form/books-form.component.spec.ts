import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFormComponent } from './books-form.component';
import { BooksModule } from '../books.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

describe(BooksFormComponent.name, () => {
  let component: BooksFormComponent;
  let fixture: ComponentFixture<BooksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        BooksModule,
        AppRoutingModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})
      ]
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
