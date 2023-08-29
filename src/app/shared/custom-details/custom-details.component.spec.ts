import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDetailsComponent } from './custom-details.component';
import { ArrToStringPipe } from 'src/app/core/pipes/arr-to-string.pipe';

describe(CustomDetailsComponent.name, () => {
  let component: CustomDetailsComponent;
  let fixture: ComponentFixture<CustomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CustomDetailsComponent,
        ArrToStringPipe
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
