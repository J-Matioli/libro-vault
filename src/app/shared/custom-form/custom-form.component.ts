import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorFormDialogComponent } from '../author-form-dialog/author-form-dialog.component';
import { PublisherFormDialogComponent } from '../publisher-form-dialog/publisher-form-dialog.component';
import { GenreFormDialogComponent } from '../genre-form-dialog/genre-form-dialog.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { genresOptions, languageOptions, authorOptions, publisherOptions } from '../custom-filter/filter-helper';
import { CustomChipComponent } from '../custom-chip/custom-chip.component';
import { CustomForm, CustomVolumeForm } from 'src/app/core/utils/form-utils';
import { VolumeFormComponent } from './components/volume-form/volume-form.component';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { selectAuthorsAsOption } from 'src/app/features/authors/store/selectors/author.selectors';
import { Option } from '../custom-select/custom-select.component';
import { RequestAuthors } from 'src/app/features/authors/store/actions/author.actions';
import { selectGenresAsOption } from 'src/app/features/genres/store/selectors/genre.selectors';
import { RequestGenres } from 'src/app/features/genres/store/actions/genre.actions';

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

  public authors$: Observable<Option[]> = this.store.select(selectAuthorsAsOption);
  public genres$: Observable<Option[]> = this.store.select(selectGenresAsOption);

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new RequestAuthors({data: {
      Ordenar: 'Crescente'
    }}));

    this.store.dispatch(new RequestGenres({data: {
      Ordenar: 'Crescente'
    }}));

    this.createForm();

    this.form.controls.volumeUnico.valueChanges.subscribe(data => {
      if(data) {
        this.form.controls.volumes?.clear();
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
    this.form.controls.imagem.setValue(ev)
  }

  addVol() {
    const volumeLength = this.form.controls.volumes!.controls.length + 1;
    const volumeControl = this.createVolumeForm(volumeLength.toString());
    this.form.controls.volumes?.push(volumeControl);
  }

  removeVol(i: number) {
    this.form.controls.volumes?.removeAt(i);
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

  authorsOptions(ev: string) {    
    if(ev != null) {
      this.store.dispatch(new RequestAuthors({data: {
        Ordenar: 'Crescente',
        PalavraChave: ev
      }}));
    }
  }

  displayPublisherAutoComplete(option: string): string {
    return publisherOptions.find(el => el.value == option)?.viewValue || '';
  }
}
