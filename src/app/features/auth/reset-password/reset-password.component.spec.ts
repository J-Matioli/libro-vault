import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { AuthModule } from '../auth.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe(ResetPasswordComponent.name, () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let router: Router;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when submit method is called', () => {

    const formValue = {
      senha: 'sdalk2312',
      confirmarSenha: 'sdalk2312'
    }

    const navigateSpy = spyOn(router, 'navigate');
    component.submit(formValue);
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });
});
