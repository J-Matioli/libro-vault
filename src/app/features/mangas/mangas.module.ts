import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangasComponent } from './mangas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MangasRoutingModule } from './mangas-routing.module';
import { MangasListComponent } from './mangas-list/mangas-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    MangasComponent,
    MangasListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MangasRoutingModule
  ]
})
export class MangasModule { }
