import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeFormComponent } from './volume-form.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomVolumeForm } from 'src/app/core/utils/form-utils';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ImgCropperComponent } from 'src/app/shared/img-cropper/img-cropper.component';
import { ImageCropperComponent } from 'ngx-image-cropper';

describe(VolumeFormComponent.name, () => {
  let component: VolumeFormComponent;
  let fixture: ComponentFixture<VolumeFormComponent>;

  const fg: FormGroup<CustomVolumeForm> = new FormGroup<CustomVolumeForm>({
    volume: new FormControl('1', {validators: [Validators.required], nonNullable: true}),
    imagem: new FormControl('', {nonNullable: true}),
    anotacao: new FormControl('', {nonNullable: true}),
    maisInfo: new FormGroup({
      preco: new FormControl('', {nonNullable: true}),
      pagina: new FormControl(),
      dataCompra: new FormControl('', {nonNullable: true}),
      lido: new FormControl(false, {nonNullable: true}),
      dataLeitura: new FormControl({value: '', disabled: true}, {nonNullable: true}),
    })
  });

  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        VolumeFormComponent,
        ImgCropperComponent,
        ImageCropperComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
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
