import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf.component';
import { ShelfListComponent } from './shelf-list/shelf-list.component';
import { ShelfDetailsComponent } from './shelf-details/shelf-details.component';
import { ShelfRoutingModule } from './shelf-routing.module';



@NgModule({
  declarations: [
    ShelfComponent,
    ShelfListComponent,
    ShelfDetailsComponent
  ],
  imports: [
    CommonModule,
    ShelfRoutingModule
  ]
})
export class ShelfModule { }
