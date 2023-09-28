import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublisherFormDialogComponent } from './publisher-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { publisherReducer } from 'src/app/features/publishers/store/reducer/publisher';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe(PublisherFormDialogComponent.name, () => {
  let component: PublisherFormDialogComponent;
  let fixture: ComponentFixture<PublisherFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PublisherFormDialogComponent,
        CustomButtonComponent
      ],
      imports: [ 
        ReactiveFormsModule,
        MatFormFieldModule,
        StoreModule.forRoot({}), 
        StoreModule.forFeature('publisher', publisherReducer),
        MatButtonModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
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
