import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BooksFormComponent } from './books-form/books-form.component';
import { BooksDetailsComponent } from './books-details/books-details.component';



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
    BooksRoutingModule
  ]
})
export class BooksModule { }
