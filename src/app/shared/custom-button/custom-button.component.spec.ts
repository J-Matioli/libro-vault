import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonComponent } from './custom-button.component';
import { SharedModule } from '../shared.module';
import { MatButtonModule } from '@angular/material/button';

describe(CustomButtonComponent.name, () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomButtonComponent ],
      imports: [ MatButtonModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when button is clicked', () => {
    const btnEmitClick = spyOn(component.clickButton, 'emit');
    component.onClick();
    expect(btnEmitClick).toHaveBeenCalled();
  });

});
