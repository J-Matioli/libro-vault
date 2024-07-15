import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersComponent } from './publishers.component';
import { PublishersModule } from './publishers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { publisherReducer } from './store/reducer/publisher';
import { EffectsModule } from '@ngrx/effects';
import { PublisherEffects } from './store/effects/publisher.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe(PublishersComponent.name, () => {
  let component: PublishersComponent;
  let fixture: ComponentFixture<PublishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        PublishersModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}), 
        MatSnackBarModule,
        StoreModule.forFeature('publisher', publisherReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PublisherEffects]),
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
