import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { authorReducer } from './store/reducer/author';
import { AuthorEffects } from './store/effects/author.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    AuthorsRoutingModule,
    StoreModule.forFeature('author', authorReducer),
    EffectsModule.forFeature([AuthorEffects])
  ]
})
export class AuthorsModule { }
