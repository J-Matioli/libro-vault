import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
