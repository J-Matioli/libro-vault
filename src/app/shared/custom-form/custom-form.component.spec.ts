import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormComponent } from './custom-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomChipComponent } from '../custom-chip/custom-chip.component';
import { MatChipsModule } from '@angular/material/chips';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CustomTitleComponent } from '../custom-title/custom-title.component';
import { MatSelectModule } from '@angular/material/select';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { ImgCropperComponent } from '../img-cropper/img-cropper.component';
import { MatButtonModule } from '@angular/material/button';
import { ImageCropperComponent } from 'ngx-image-cropper';

describe(CustomFormComponent.name, () => {
  let component: CustomFormComponent;
  let fixture: ComponentFixture<CustomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CustomFormComponent,
        CustomChipComponent,
        CustomButtonComponent,
        CustomTitleComponent,
        CustomSelectComponent,
        ImgCropperComponent,
        ImageCropperComponent
      ],
      imports: [ 
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatChipsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
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
