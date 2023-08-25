import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilterComponent } from './custom-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(CustomFilterComponent.name, () => {
  let component: CustomFilterComponent;
  let fixture: ComponentFixture<CustomFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFilterComponent ],
      imports: [
        MatFormFieldModule,
        MatChipsModule,
        FormsModule,
        ReactiveFormsModule,
        CdkAccordionModule,
        MatInputModule,
        BrowserAnimationsModule
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
