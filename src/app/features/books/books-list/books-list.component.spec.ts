import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { BooksModule } from '../books.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe(BooksListComponent.name, () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BooksModule,
        RouterTestingModule,
        MatNativeDateModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${BooksListComponent.prototype.cardAction.name}
  should navigate to details on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const books = component.books;

    for(let i = 0; i < books.length; i++) {

      const ev = { 
        action: 'GET',
        id: books[i].id
      }

      component.cardAction(ev)
            
      expect(navigateSpy)
        .withContext(books[i].title)
        .toHaveBeenCalledWith(
          [
            './detalhes',
            ev.id
          ],
          {relativeTo: route
        });
    }  
  })

  it(`#${BooksListComponent.prototype.cardAction.name}
  should navigate to edit on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const books = component.books;

    for(let i = 0; i < books.length; i++) {

      const ev = { 
        action: 'EDIT',
        id: books[i].id
      }

      component.cardAction(ev)
            
      expect(navigateSpy)
        .withContext(books[i].title)
        .toHaveBeenCalledWith(
          [
            './editar',
            ev.id
          ],
          {relativeTo: route
        });
    }  
  })

  it(`#${BooksListComponent.prototype.addBookRoute.name}
  should navigate to Add when is method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    
      component.addBookRoute()
            
      expect(navigateSpy)    
        .toHaveBeenCalledWith(
          ['./adicionar'], {relativeTo: route}
        );
  })
});
