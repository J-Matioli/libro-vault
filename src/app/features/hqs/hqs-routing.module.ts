import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HqsComponent } from './hqs.component';
import { HqsListComponent } from './hqs-list/hqs-list.component';
import { HqsDetailsComponent } from './hqs-details/hqs-details.component';
import { HqsFormComponent } from './hqs-form/hqs-form.component';


const routes: Routes = [
  {
    path: '',
    component: HqsComponent,
    children: [
      { path: '', component: HqsListComponent},
      { path: 'adicionar', component: HqsFormComponent, data: {type: 'ADD'} },
      { path: 'detalhes/:id', component: HqsDetailsComponent },
      { path: 'editar/:id', component: HqsFormComponent, data: {type: 'PUT'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HqsRoutingModule { }
