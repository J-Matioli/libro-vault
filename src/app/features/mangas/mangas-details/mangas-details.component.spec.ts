import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasDetailsComponent } from './mangas-details.component';
import { MangasModule } from '../mangas.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(MangasDetailsComponent.name, () => {
  let component: MangasDetailsComponent;
  let fixture: ComponentFixture<MangasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        MangasModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
