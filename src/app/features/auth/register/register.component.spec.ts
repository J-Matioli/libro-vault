import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthModule } from '../auth.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { of } from 'rxjs';
import { buildRegister } from './test/build-register';

describe(RegisterComponent.name, () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
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

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    service = TestBed.inject(AuthService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when submit method is called', () => {

    const registerResponse = buildRegister();
    const formValue = {
      nome: "Nome Sobrenome",
      email: "teste@email.com",
      dataDeNascimento:  "01/01/2000",
      genero: "2",
      senha: 'sdalk2312',
      confirmarSenha:"teste@email.com"
    }

    spyOn(service, 'register')
      .and.returnValue(of(registerResponse));
    fixture.detectChanges();

    const navigateSpy = spyOn(router, 'navigate');
    component.submit(formValue);
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
});
});
