import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfListComponent } from './shelf-list.component';
import { ShelfModule } from '../shelf.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe(ShelfListComponent.name, () => {
  let component: ShelfListComponent;
  let fixture: ComponentFixture<ShelfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ShelfModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
