import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordEmailFormComponent } from './change-password-email-form.component';
import { AuthModule } from '../../../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(ChangePasswordEmailFormComponent.name, () => {
  let component: ChangePasswordEmailFormComponent;
  let fixture: ComponentFixture<ChangePasswordEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordEmailFormComponent);
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
