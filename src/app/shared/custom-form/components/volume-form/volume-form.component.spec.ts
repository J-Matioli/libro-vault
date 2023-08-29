import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeFormComponent } from './volume-form.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomVolumeForm } from 'src/app/core/utils/form-utils';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(VolumeFormComponent.name, () => {
  let component: VolumeFormComponent;
  let fixture: ComponentFixture<VolumeFormComponent>;

  const fg: FormGroup<CustomVolumeForm> = new FormGroup<CustomVolumeForm>({
    volume: new FormControl(''),
    anotacoes: new FormControl(''),
    imagem: new FormControl(''),
    maisInfo: new FormGroup({
      dataCompra: new FormControl(''),
      dataLeitura: new FormControl(''),
      lido: new FormControl(''),
      pagina: new FormControl(''),
      preco: new FormControl('')
    })
  });

  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: ControlContainer, useValue: fgd}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
