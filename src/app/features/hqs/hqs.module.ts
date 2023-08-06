import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HqsDetailsComponent } from './hqs-details/hqs-details.component';
import { HqsListComponent } from './hqs-list/hqs-list.component';
import { HqsFormComponent } from './hqs-form/hqs-form.component';
import { HqsVolumeComponent } from './hqs-volume/hqs-volume.component';
import { HqsComponent } from './hqs.component';
import { HqsRoutingModule } from './hqs-routing.module';



@NgModule({
  declarations: [
    HqsDetailsComponent,
    HqsListComponent,
    HqsFormComponent,
    HqsVolumeComponent,
    HqsComponent
  ],
  imports: [
    CommonModule,
    HqsRoutingModule
  ]
})
export class HqsModule { }
