import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountComponent } from './my-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from 'src/app/reducers';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { SkeletonDirective } from 'src/app/core/directives/skeleton.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import * as fromCore from '../../core/store/reducers/index';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe(MyAccountComponent.name, () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  const MY_DATE_FORMAT = {
    parse: {
      dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
    },
    display: {
      dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MyAccountComponent,
        CustomButtonComponent,
        SkeletonComponent,
        SkeletonDirective
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}), 
        StoreModule.forFeature('core', fromCore.reducers, {
          metaReducers
        }),
        HttpClientModule,
        MatSelectModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
