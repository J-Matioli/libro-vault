import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { LoginModule } from '../../login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(LoginFormComponent.name, () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        LoginModule,
        BrowserAnimationsModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT emit form value if form is valid', () => {
    const fomrEmitterSpy = spyOn(component.formSubmit, 'emit');

    component.submit();
    expect(fomrEmitterSpy).not.toHaveBeenCalled();
  });

  it('should emit form value if form is valid', () => {
    const fomrEmitterSpy = spyOn(component.formSubmit, 'emit');

    component.form.setValue({
      senha: 'asdaçlksjda',
      usuario: 'teste'
    })

    component.submit();
    expect(fomrEmitterSpy).toHaveBeenCalled();
  });

});
