import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShelfDialogComponent } from './edit-shelf-dialog.component';
import { ShelfModule } from '../../shelf.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface ShelfDialogData {
  action: 'UPDATE' | 'DELETE';
  shelf: any;
}

describe(EditShelfDialogComponent.name, () => {
  let component: EditShelfDialogComponent;
  let fixture: ComponentFixture<EditShelfDialogComponent>;

  const data: ShelfDialogData = {
    action: 'UPDATE',
    shelf: { }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ShelfModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShelfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
