import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormComponent } from './custom-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(CustomFormComponent.name, () => {
  let component: CustomFormComponent;
  let fixture: ComponentFixture<CustomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFormComponent ],
      imports: [ 
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatCheckboxModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
