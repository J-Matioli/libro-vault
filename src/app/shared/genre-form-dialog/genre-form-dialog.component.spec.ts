import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFormDialogComponent } from './genre-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe(GenreFormDialogComponent.name, () => {
  let component: GenreFormDialogComponent;
  let fixture: ComponentFixture<GenreFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreFormDialogComponent ],
      imports: [ 
        ReactiveFormsModule,
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreFormDialogComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
