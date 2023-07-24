import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [
    BooksListComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
