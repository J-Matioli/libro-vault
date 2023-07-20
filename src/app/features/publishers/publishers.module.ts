import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersComponent } from './publishers/publishers.component';
import { PublishersRoutingModule } from './publishers-routing.module';



@NgModule({
  declarations: [
    PublishersComponent
  ],
  imports: [
    CommonModule,
    PublishersRoutingModule
  ]
})
export class PublishersModule { }
