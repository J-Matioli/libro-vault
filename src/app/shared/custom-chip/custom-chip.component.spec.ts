import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChipComponent } from './custom-chip.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

describe(CustomChipComponent.name, () => {
  let component: CustomChipComponent;
  let fixture: ComponentFixture<CustomChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChipComponent ],
      imports: [ 
        MatAutocompleteModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${CustomChipComponent.prototype.requireValidator.name}
   should set chipList.errorState true if required and control is invalid`, () => {
    
    component.control = new FormControl(null, { validators: [Validators.required]});
    component.required = true;
        
    component.requireValidator();
    expect(component.chipList.errorState).toBeTrue();
  })

  it(`#${CustomChipComponent.prototype.requireValidator.name}
   should set chipList.errorState false if required and control is valid`, () => {
    
    component.control = new FormControl(null);
    component.required = false;
        
    component.requireValidator();
    expect(component.chipList.errorState).toBeFalse();
  })
});
