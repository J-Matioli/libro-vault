import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorFormDialogComponent } from '../author-form-dialog/author-form-dialog.component';
import { PublisherFormDialogComponent } from '../publisher-form-dialog/publisher-form-dialog.component';
import { GenreFormDialogComponent } from '../genre-form-dialog/genre-form-dialog.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { genresOptions, languageOptions, authorOptions, publisherOptions } from '../custom-filter/filter-helper';

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

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.form.valueChanges.subscribe(console.log)
  }

  createForm() {
    this.form = this.fb.group<CustomForm>({
      obra: new FormControl(),
      autor: new FormControl(),
      editora: new FormControl(),
      idioma: new FormControl(),
      anotacoes: new FormControl(),
      generos: new FormControl(),
      volumeUnico: new FormControl(),
      maisInfo: new FormGroup({
        preco: new FormControl(),
        pagina: new FormControl(),
        lido: new FormControl(),
      })
    })
  }

  croppedImage(ev: any) {
    console.log('Image base64', ev);
  }

  addVol() {}
  removeVol(i: number) {}

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
  obra: FormControl<string>
  autor: FormControl<string[]>
  editora: FormControl<string>  
  idioma: FormControl<string[]>
  anotacoes: FormControl<string>
  generos: FormControl<string[]>
  volumeUnico: FormControl<string>
  maisInfo: FormGroup
}
