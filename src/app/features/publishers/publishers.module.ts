import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersComponent } from './publishers.component';
import { PublishersRoutingModule } from './publishers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { publisherReducer } from './store/reducer/publisher';
import { PublisherEffects } from './store/effects/publisher.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    PublishersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    PublishersRoutingModule,
    StoreModule.forFeature('publisher', publisherReducer),
    EffectsModule.forFeature([PublisherEffects])
  ]
})
export class PublishersModule { }
