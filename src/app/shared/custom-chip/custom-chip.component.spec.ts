import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChipComponent } from './custom-chip.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(CustomChipComponent.name, () => {
  let component: CustomChipComponent;
  let fixture: ComponentFixture<CustomChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChipComponent ],
      imports: [ 
        MatAutocompleteModule,
        MatChipsModule,
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
});
