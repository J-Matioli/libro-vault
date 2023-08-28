import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublisherFormDialogComponent } from './publisher-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


describe(PublisherFormDialogComponent.name, () => {
  let component: PublisherFormDialogComponent;
  let fixture: ComponentFixture<PublisherFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherFormDialogComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
