import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardComponent } from './custom-card.component';
import { ArrToStringPipe } from 'src/app/core/pipes/arr-to-string.pipe';

describe(CustomCardComponent.name, () => {
  let component: CustomCardComponent;
  let fixture: ComponentFixture<CustomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CustomCardComponent,
        ArrToStringPipe
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
