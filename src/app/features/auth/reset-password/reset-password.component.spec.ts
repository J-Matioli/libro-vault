import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { AuthModule } from '../auth.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { buildResetPassword } from './test/build-reset-password';
import { of } from 'rxjs';

describe(ResetPasswordComponent.name, () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let router: Router;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when submit method is called', () => {

    const resetPasswordResponse = buildResetPassword();
    const formValue = {
      senha: 'Teste@1234',
      confirmarSenha: 'Teste@1234'
    }

    
    spyOn(service, 'resetPassword')
      .and.returnValue(of(resetPasswordResponse));
    fixture.detectChanges();

    const navigateSpy = spyOn(router, 'navigate');
    component.submit(formValue);
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });
});
