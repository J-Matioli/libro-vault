import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login.module';
import { Router, RouterModule } from '@angular/router';

describe(LoginComponent.name, () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        LoginModule,
        BrowserAnimationsModule,
        RouterModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when submit method is called', () => {

    const formValue = {
      usuario: 'teste',
      senha: 'sdalk2312'
    }

    const navigateSpy = spyOn(router, 'navigate');
    component.submit(formValue);
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
});
