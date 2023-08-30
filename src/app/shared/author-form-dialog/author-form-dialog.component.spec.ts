import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorFormDialogComponent } from './author-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';



describe(AuthorFormDialogComponent.name, () => {
  let component: AuthorFormDialogComponent;
  let fixture: ComponentFixture<AuthorFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AuthorFormDialogComponent,
        CustomButtonComponent
      ],
      imports: [ 
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
