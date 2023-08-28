import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth.module';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { buildLogin } from './test/build-login';
import { of } from 'rxjs';

describe(LoginComponent.name, () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let service: AuthService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    service = TestBed.inject(AuthService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when submit method is called', () => {

    const loginResponse = buildLogin();
    const formValue = {
      usuario: 'yeweh57232@vikinoko.com',
      senha: 'Teste@123'
    }
    spyOn(service, 'login')
      .and.returnValue(of(loginResponse));
    fixture.detectChanges();

    const navigateSpy = spyOn(router, 'navigate');
    component.submit(formValue);
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
});
