import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoFormComponent } from './more-info-form.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaisInfoForm } from 'src/app/core/utils/form-utils';
import { CurrencyPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';

describe(MoreInfoFormComponent.name, () => {
  let component: MoreInfoFormComponent;
  let fixture: ComponentFixture<MoreInfoFormComponent>;

  const MY_DATE_FORMAT = {
    parse: {
      dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
    },
    display: {
      dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
  };

  const fg: FormGroup<CustomMaisInfoForm> = new FormGroup<CustomMaisInfoForm>({
    preco: new FormControl('', {nonNullable: true}),
    pagina: new FormControl(),
    dataCompra: new FormControl('', {nonNullable: true}),
    lido: new FormControl(false, {nonNullable: true}),
    dataLeitura: new FormControl({value: '', disabled: true}, {nonNullable: true}),
  });

  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatMomentDateModule,
        MatFormFieldModule,
        MatInputModule,
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule,
        MatDatepickerModule
      ],
      providers: [
        { provide: ControlContainer, useValue: fgd },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
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
