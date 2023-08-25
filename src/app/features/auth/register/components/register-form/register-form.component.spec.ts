import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { AuthModule } from '../../../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(RegisterFormComponent.name, () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
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
      nome: "Nome Sobrenome",
      email: "teste@email.com",
      dataNascimento: "2012-01-26T13:51:50.417-07:00",
      genero: "2",
      senha: 'Teste@123',
      confirmarSenha:"Teste@123"
    })
        
    component.submit();
    expect(fomrEmitterSpy).toHaveBeenCalled();
  });  
});
