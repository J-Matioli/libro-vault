import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoFormComponent } from './more-info-form.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaisInfoForm } from 'src/app/core/utils/form-utils';
import { CurrencyPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe(MoreInfoFormComponent.name, () => {
  let component: MoreInfoFormComponent;
  let fixture: ComponentFixture<MoreInfoFormComponent>;

  const fg: FormGroup<CustomMaisInfoForm> = new FormGroup<CustomMaisInfoForm>({
    dataCompra: new FormControl(''),
    dataLeitura: new FormControl(''),
    lido: new FormControl(''),
    pagina: new FormControl(''),
    preco: new FormControl('')
  });

  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule
      ],
      providers: [
        { provide: ControlContainer, useValue: fgd },
        CurrencyPipe
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
