import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRangeDatePickerComponent } from './custom-range-date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(CustomRangeDatePickerComponent.name, () => {
  let component: CustomRangeDatePickerComponent;
  let fixture: ComponentFixture<CustomRangeDatePickerComponent>;

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
      declarations: [ CustomRangeDatePickerComponent ],
      imports: [ 
        MatFormFieldModule,
        MatDatepickerModule,
        BrowserAnimationsModule,
        MatMomentDateModule
      ],
      providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRangeDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
