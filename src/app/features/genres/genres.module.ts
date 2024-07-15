import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenresRoutingModule } from './genres-routing.module';
import { GenreReducer } from './store/reducer/genre';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GenreEffects } from './store/effects/genre.effects';



@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GenresRoutingModule,
    MatDialogModule,
    StoreModule.forFeature('genre', GenreReducer),
    EffectsModule.forFeature([GenreEffects])
  ]
})
export class GenresModule { }
