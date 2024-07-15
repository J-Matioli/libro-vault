import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsFormComponent } from './hqs-form.component';
import { HqsModule } from '../hqs.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe(HqsFormComponent.name, () => {
  let component: HqsFormComponent;
  let fixture: ComponentFixture<HqsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HqsModule,
        AppRoutingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
