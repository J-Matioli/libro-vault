import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModule } from '../../../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SendEmailFormComponent } from './send-email-form.component';

describe(SendEmailFormComponent.name, () => {
  let component: SendEmailFormComponent;
  let fixture: ComponentFixture<SendEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEmailFormComponent);
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
      action: 'RESET_PASSWORD'
    })

    component.submit();
    expect(fomrEmitterSpy).toHaveBeenCalled();
  });
});
