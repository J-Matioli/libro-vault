import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsListComponent } from './hqs-list.component';
import { HqsModule } from '../hqs.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe(HqsListComponent.name, () => {
  let component: HqsListComponent;
  let fixture: ComponentFixture<HqsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HqsModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
