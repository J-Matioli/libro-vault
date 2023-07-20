import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersComponent } from './publishers/publishers.component';
import { PublishersRoutingModule } from './publishers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PublishersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublishersRoutingModule
  ]
})
export class PublishersModule { }
