import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangasComponent } from './mangas.component';
import { MangasListComponent } from './mangas-list/mangas-list.component';
import { MangasDetailsComponent } from './mangas-details/mangas-details.component';
import { MangasFormComponent } from './mangas-form/mangas-form.component';


const routes: Routes = [
  {
    path: '',
    component: MangasComponent,
    children: [
      { path: '', component: MangasListComponent},
      { path: 'adicionar', component: MangasFormComponent, data: {type: 'ADD'} },
      { path: 'detalhes/:id', component: MangasDetailsComponent },
      { path: 'editar/:id', component: MangasFormComponent, data: {type: 'PUT'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangasRoutingModule { }
