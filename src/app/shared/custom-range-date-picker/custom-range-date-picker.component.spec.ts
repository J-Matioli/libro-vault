import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRangeDatePickerComponent } from './custom-range-date-picker.component';

describe('CustomRangeDatePickerComponent', () => {
  let component: CustomRangeDatePickerComponent;
  let fixture: ComponentFixture<CustomRangeDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRangeDatePickerComponent ]
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
