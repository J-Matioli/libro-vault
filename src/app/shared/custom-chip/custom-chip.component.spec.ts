import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChipComponent } from './custom-chip.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe(CustomChipComponent.name, () => {
  let component: CustomChipComponent;
  let fixture: ComponentFixture<CustomChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChipComponent ],
      imports: [ MatAutocompleteModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
