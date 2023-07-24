import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      { path: '', component: BooksListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
