import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDeleteDialogComponent } from './work-delete-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe(WorkDeleteDialogComponent.name, () => {
  let component: WorkDeleteDialogComponent;
  let fixture: ComponentFixture<WorkDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        WorkDeleteDialogComponent
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
