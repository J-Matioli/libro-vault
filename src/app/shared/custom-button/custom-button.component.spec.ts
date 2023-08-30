import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonComponent } from './custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe(CustomButtonComponent.name, () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomButtonComponent ],
      imports: [ 
        MatButtonModule,
        MatProgressBarModule,
        MatIconModule
      ]
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
