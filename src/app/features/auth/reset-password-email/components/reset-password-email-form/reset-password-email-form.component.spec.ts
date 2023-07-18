import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordEmailFormComponent } from './reset-password-email-form.component';
import { AuthModule } from '../../../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(ResetPasswordEmailFormComponent.name, () => {
  let component: ResetPasswordEmailFormComponent;
  let fixture: ComponentFixture<ResetPasswordEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordEmailFormComponent);
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
      email: 'testemail@teste.com',
    })

    component.submit();
    expect(fomrEmitterSpy).toHaveBeenCalled();
  });
});
