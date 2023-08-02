import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books.component';
import { BooksFormComponent } from './books-form/books-form.component';
import { BooksDetailsComponent } from './books-details/books-details.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      { path: '', component: BooksListComponent},
      { path: 'adicionar', component: BooksFormComponent, data: {type: 'ADD'} },
      { path: 'detalhes/:id', component: BooksDetailsComponent },
      { path: 'editar/:id', component: BooksFormComponent, data: {type: 'PUT'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
