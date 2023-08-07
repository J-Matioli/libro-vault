import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf.component';
import { ShelfListComponent } from './shelf-list/shelf-list.component';
import { ShelfDetailsComponent } from './shelf-details/shelf-details.component';
import { ShelfRoutingModule } from './shelf-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    ShelfComponent,
    ShelfListComponent,
    ShelfDetailsComponent
  ],
  imports: [
    CommonModule,
    ShelfRoutingModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class ShelfModule { }
