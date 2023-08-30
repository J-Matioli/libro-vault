import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesMessageComponent } from './cookies-message.component';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from 'src/app/shared/custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';

describe(CookiesMessageComponent.name, () => {
  let component: CookiesMessageComponent;
  let fixture: ComponentFixture<CookiesMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CookiesMessageComponent,
        CustomButtonComponent
      ],
      imports: [
        MatIconModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiesMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
