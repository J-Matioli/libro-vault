import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasListComponent } from './mangas-list.component';
import { MangasModule } from '../mangas.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(MangasListComponent.name, () => {
  let component: MangasListComponent;
  let fixture: ComponentFixture<MangasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        MangasModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
