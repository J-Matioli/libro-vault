import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresComponent } from './genres.component';
import { GenresModule } from './genres.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { GenreReducer } from './store/reducer/genre';
import { GenreEffects } from './store/effects/genre.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(GenresComponent.name, () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        GenresModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}), 
        MatSnackBarModule,
        StoreModule.forFeature('genre', GenreReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([GenreEffects]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
