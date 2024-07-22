import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BooksFormComponent } from './books-form/books-form.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducer/book';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/effects/book.effects';



@NgModule({
  declarations: [
    BooksListComponent,
    BooksComponent,
    BooksFormComponent,
    BooksDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    BooksRoutingModule,
    StoreModule.forFeature('book', bookReducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
