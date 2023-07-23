import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersComponent } from './publishers.component';
import { PublishersRoutingModule } from './publishers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PublishersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    PublishersRoutingModule
  ]
})
export class PublishersModule { }
