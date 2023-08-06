import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelfListComponent } from './shelf-list/shelf-list.component';
import { ShelfDetailsComponent } from './shelf-details/shelf-details.component';
import { ShelfComponent } from './shelf.component';


const routes: Routes = [
  {
    path: '',
    component: ShelfComponent,
    children: [
      { path: '', component: ShelfListComponent},
      { path: 'detalhes/:id', component: ShelfDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelfRoutingModule { }
