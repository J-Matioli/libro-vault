import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModule } from '../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SendEmailComponent } from './send-email.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { buildResendEmail } from './test/build-send-email';

describe(SendEmailComponent.name, () => {
  let component: SendEmailComponent;
  let fixture: ComponentFixture<SendEmailComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEmailComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${SendEmailComponent.prototype.submit.name}
  should call resendConfirmEmail method if ev.action is RESET_PASSWORD`, () => {
    const resendConfirmEmailSpy = spyOn(component, 'resendConfirmEmail');
    
    const ev = {
      email: 'teste@teste.com',
      action: 'SEND_EMAIL'
    }

    component.submit(ev);

    const emailFormData = new FormData();
    emailFormData.append('email', ev.email);

    expect(resendConfirmEmailSpy).toHaveBeenCalledWith(emailFormData);
  });

  it(`#${SendEmailComponent.prototype.submit.name}
  should call resetPassword method if ev.action is RESET_PASSWORD`, () => {
    const resetPasswordSpy = spyOn(component, 'resetPassword');
    
    const ev = {
      email: 'teste@teste.com',
      action: 'RESET_PASSWORD'
    }

    component.submit(ev);

    const emailFormData = new FormData();
    emailFormData.append('email', ev.email);

    expect(resetPasswordSpy).toHaveBeenCalledWith(emailFormData);
  });

  it(`#${SendEmailComponent.prototype.sendSuccess.name}
  should define loader false, open snackbar and navigate to login`, () => {
    const openSnackBarSpy = spyOn(authService, 'openSnackBar');
    const routerSpy = spyOn(router, 'navigate');
    const res = buildResendEmail()
    component.sendSuccess(res);
    
    expect(openSnackBarSpy).toHaveBeenCalledWith(res['mensagem'][0]);
    expect(component.isLoading).toBeFalse();
    expect(routerSpy).toHaveBeenCalledWith(['login']);
  });
});
