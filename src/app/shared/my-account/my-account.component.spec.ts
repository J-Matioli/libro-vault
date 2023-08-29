import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountComponent } from './my-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from 'src/app/reducers';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

describe(MyAccountComponent.name, () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MyAccountComponent,
        CustomButtonComponent
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, {
          metaReducers
        }),
        HttpClientModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
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
