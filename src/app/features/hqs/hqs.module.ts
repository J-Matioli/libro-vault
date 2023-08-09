import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HqsDetailsComponent } from './hqs-details/hqs-details.component';
import { HqsListComponent } from './hqs-list/hqs-list.component';
import { HqsFormComponent } from './hqs-form/hqs-form.component';
import { HqsComponent } from './hqs.component';
import { HqsRoutingModule } from './hqs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    HqsDetailsComponent,
    HqsListComponent,
    HqsFormComponent,
    HqsComponent
  ],
  imports: [
    CommonModule,
    HqsRoutingModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class HqsModule { }
