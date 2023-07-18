import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordFormComponent } from './reset-password-form.component';

import { AuthModule } from '../../../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(ResetPasswordFormComponent.name, () => {
  let component: ResetPasswordFormComponent;
  let fixture: ComponentFixture<ResetPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordFormComponent);
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
      senha: 'Teste@123',
      confirmarSenha: 'Teste@123'
    })

    component.submit();
    expect(fomrEmitterSpy).toHaveBeenCalled();
  });
});
