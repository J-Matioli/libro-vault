import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasFormComponent } from './mangas-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MangasModule } from '../mangas.module';

describe(MangasFormComponent.name, () => {
  let component: MangasFormComponent;
  let fixture: ComponentFixture<MangasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        MangasModule,
        AppRoutingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
