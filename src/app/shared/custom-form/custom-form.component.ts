import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorFormDialogComponent } from '../author-form-dialog/author-form-dialog.component';
import { PublisherFormDialogComponent } from '../publisher-form-dialog/publisher-form-dialog.component';
import { GenreFormDialogComponent } from '../genre-form-dialog/genre-form-dialog.component';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { genresOptions, languageOptions, authorOptions, publisherOptions } from '../custom-filter/filter-helper';
import { CustomChipComponent } from '../custom-chip/custom-chip.component';
import { CustomForm, CustomVolumeForm } from 'src/app/core/utils/form-utils';
import { VolumeFormComponent } from './components/volume-form/volume-form.component';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  public form: FormGroup<CustomForm>;

  public genresOptions = genresOptions;
  public languageOptions = languageOptions;
  public authorOptions = authorOptions;
  public publisherOptions = publisherOptions;

  @Input() workType: 'livro' | 'manga' | 'hq';
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("chipAuthor") chipAuthor: CustomChipComponent;
  @ViewChildren(VolumeFormComponent) volumeFormComponents: QueryList<VolumeFormComponent>;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.volumeUnico.valueChanges.subscribe(data => {
      if(data) {
        this.volumes.clear();
      }else {
        this.addVol();
      }
    })
  }

  createForm() {
    this.form = this.fb.group<CustomForm>({
      obra: new FormControl(null, { validators: [Validators.required]}),
      autor: new FormControl(null, { validators: [Validators.required]}),
      editora: new FormControl(null, { validators: [Validators.required]}),
      idioma: new FormControl(null, { validators: [Validators.required]}),
      imagem: new FormControl(),
      anotacoes: new FormControl(),
      generos: new FormControl(),
      volumeUnico: new FormControl(),
      maisInfo: new FormGroup({
        preco: new FormControl(),
        pagina: new FormControl(),
        dataCompra: new FormControl(),
        lido: new FormControl(),
        dataLeitura: new FormControl(),
      }),
      volumes:  this.fb.array([
        this.createVolumeForm('1')
      ])
    })
  }

  createVolumeForm(volume: string | null = null): FormGroup<CustomVolumeForm> {
    return this.fb.group<CustomVolumeForm>({
      volume: new FormControl(volume, [Validators.required]),
      imagem: new FormControl(),
      anotacoes: new FormControl(),
      maisInfo: new FormGroup({
        preco: new FormControl(),
        pagina: new FormControl(),
        dataCompra: new FormControl(),
        lido: new FormControl(),
        dataLeitura: new FormControl(),
      }),
    })
  }

  submit() {
    this.form.markAllAsTouched();
    this.chipAuthor.requireValidator();

    this.volumeFormComponents.forEach(component => {
      component.requireValidator()
    })
    
    if(this.form.valid) {
      this.formValue.emit(this.form.value);
    }
  }

  croppedImage(ev: any) {
    this.imagem.setValue(ev)
  }

  addVol() {
    const volumeLength = this.volumes.controls.length + 1;
    const volumeControl = this.createVolumeForm(volumeLength.toString());
    this.volumes.push(volumeControl);
  }

  removeVol(i: number) {
    this.volumes.removeAt(i);
  }
  
  addAuthor() {
      const dialogRef = this.dialog.open(AuthorFormDialogComponent, {
        restoreFocus: false,
        data: {
          action: 'ADD'
        },
      });
  }
  addPublisher() {
    const dialogRef = this.dialog.open(PublisherFormDialogComponent, {
      restoreFocus: false,
      data: {
        action: 'ADD'
      },
    });
  }
  addGenre() {
    const dialogRef = this.dialog.open(GenreFormDialogComponent, {
      restoreFocus: false,
      data: {
        action: 'ADD'
      },
    });
  }

  displayAutoComplete(option: any): string {       
    return option && option.viewValue ? option.viewValue : '';
  }
  
  get obra(): FormControl {
    return this.form.get('obra') as FormControl
  }
  
  get autor(): FormControl {
    return this.form.get('autor') as FormControl
  }
  
  get editora(): FormControl {
    return this.form.get('editora') as FormControl
  }

  get idioma(): FormControl {
    return this.form.get('idioma') as FormControl
  }

  get imagem(): FormControl {
    return this.form.get('imagem') as FormControl
  }

  get anotacoes(): FormControl {
    return this.form.get('anotacoes') as FormControl
  }

  get generos(): FormControl {
    return this.form.get('generos') as FormControl
  }

  get volumeUnico(): FormControl {
    return this.form.get('volumeUnico') as FormControl
  }

  get maisInfo(): FormGroup {
    return this.form.get('maisInfo') as FormGroup
  }

  get volumes(): FormArray<FormGroup<CustomVolumeForm>> {
    return this.form.get('volumes') as FormArray
  }
}
