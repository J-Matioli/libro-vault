import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorFormDialogComponent } from '../author-form-dialog/author-form-dialog.component';
import { PublisherFormDialogComponent } from '../publisher-form-dialog/publisher-form-dialog.component';
import { GenreFormDialogComponent } from '../genre-form-dialog/genre-form-dialog.component';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { genresOptions, languageOptions, authorOptions, publisherOptions } from '../custom-filter/filter-helper';
import { CustomChipComponent } from '../custom-chip/custom-chip.component';

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
  @Output() backEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild("chipAuthor") chipAuthor: CustomChipComponent;


  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.maisInfo.get('lido')?.valueChanges.subscribe(data => {      
      this.controlReadInput(data)
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
      })
    })
  }

  onSubmit() {
    this.chipAuthor.requireValidator();
    
    if(this.form.valid) {
      this.formValue.emit(this.form.value);
    }
  }

  onBackBtn() {
    this.backEvent.emit();
  }

  croppedImage(ev: any) {
    this.imagem.setValue(ev)
  }

  addVol() {}
  removeVol(i: number) {}

  controlReadInput(enable: boolean) {
    if(enable) {
      this.maisInfo.get('dataLeitura')?.enable()
    }else {
      this.maisInfo.get('dataLeitura')?.reset()
      this.maisInfo.get('dataLeitura')?.disable()
    }
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
}

export interface CustomForm {
  obra: FormControl<string | null>
  autor: FormControl<string[] | null>
  editora: FormControl<string | null>  
  idioma: FormControl<string[] | null>
  imagem: FormControl<string | null>
  anotacoes: FormControl<string | null>
  generos: FormControl<string[] | null>
  volumeUnico: FormControl<string | null>
  maisInfo: FormGroup<{
    preco: FormControl<string | null>
    pagina: FormControl<string | null>
    dataCompra: FormControl<string | null>
    lido: FormControl<string | null>
    dataLeitura: FormControl<string | null>
  }>
  volumes?: FormArray<FormGroup>
}
