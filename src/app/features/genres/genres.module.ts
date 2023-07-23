import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenresRoutingModule } from './genres-routing.module';



@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GenresRoutingModule,
    MatDialogModule,
  ]
})
export class GenresModule { }
