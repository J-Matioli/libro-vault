import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilterComponent } from './custom-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { MatSelectModule } from '@angular/material/select';
import { CustomRangeDatePickerComponent } from '../custom-range-date-picker/custom-range-date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomChipComponent } from '../custom-chip/custom-chip.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe(CustomFilterComponent.name, () => {
  let component: CustomFilterComponent;
  let fixture: ComponentFixture<CustomFilterComponent>;

  const MY_DATE_FORMAT = {
    parse: {
      dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
    },
    display: {
      dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CustomFilterComponent,
        CustomRangeDatePickerComponent,
        CustomChipComponent,
        CustomSelectComponent
      ],
      imports: [
        MatFormFieldModule,
        MatChipsModule,
        FormsModule,
        MatDatepickerModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        CdkAccordionModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatMomentDateModule,
        MatDatepickerModule
      ],
      providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
