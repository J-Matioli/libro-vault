import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkShelfDialogComponent } from './add-work-shelf-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe(AddWorkShelfDialogComponent.name, () => {
  let component: AddWorkShelfDialogComponent;
  let fixture: ComponentFixture<AddWorkShelfDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkShelfDialogComponent ],
      imports: [ 
        ReactiveFormsModule,
        MatAutocompleteModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkShelfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
