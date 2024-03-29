import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { authorOptions, genresOptions, languageOptions, orderOptions, publisherOptions, yesOrNoOptions } from './filter-helper';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss']
})
export class CustomFilterComponent implements OnInit {

  form: FormGroup;

  public orderOptions = orderOptions;
  public yesOrNoOptions = yesOrNoOptions;
  public genresOptions = genresOptions;
  public languageOptions = languageOptions;
  public authorOptions = authorOptions;
  public publisherOptions = publisherOptions;

  @Output() filterValue: EventEmitter<any> = new EventEmitter<any>()

  expandedIndex = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {     
      this.filterValue.emit(data)
    })

    this.lido.valueChanges.subscribe(data => {
      this.controlReadInput(data === 'n'?  false : true)
    })
  }

  createForm() {
    this.form = this.fb.group<FilterForm>({
      obra: new FormControl('', {nonNullable: true }),
      autor: new FormControl([], {nonNullable: true }),
      ordem: new FormControl('', {nonNullable: true }),
      editora: new FormControl([], {nonNullable: true }),
      lido: new FormControl('', {nonNullable: true }),
      dataLeituraInicio: new FormControl('', {nonNullable: true }),
      dataLeituraFinal: new FormControl('', {nonNullable: true }),
      genero: new FormControl([], {nonNullable: true }),
      dataCompraInicio: new FormControl('', {nonNullable: true }),
      dataCompraFinal: new FormControl('', {nonNullable: true }),
      volumeUnico: new FormControl('', {nonNullable: true }),
      idioma: new FormControl([], {nonNullable: true })
    })
  }

  get ordem(): FormControl {
    return this.form.get('ordem') as FormControl
  }

  get genero(): FormControl {
    return this.form.get('genero') as FormControl
  }

  get idioma(): FormControl {
    return this.form.get('idioma') as FormControl
  }

  get lido(): FormControl {
    return this.form.get('lido') as FormControl
  }

  get autor(): FormControl {
    return this.form.get('autor') as FormControl
  }

  get editora(): FormControl {
    return this.form.get('editora') as FormControl
  }

  get dataLeituraInicio(): FormControl {
    return this.form.get('dataLeituraInicio') as FormControl
  }

  get dataLeituraFinal(): FormControl {
    return this.form.get('dataLeituraFinal') as FormControl
  }

  get dataCompraInicio(): FormControl {
    return this.form.get('dataCompraInicio') as FormControl
  }

  get dataCompraFinal(): FormControl {
    return this.form.get('dataCompraFinal') as FormControl
  }

  get volumeUnico(): FormControl {
    return this.form.get('volumeUnico') as FormControl
  }

  clearInput(ev: string) {
    this.form.get('obra')?.reset();
  }

  controlReadInput(enable: boolean) {
    if(enable) {
      this.dataLeituraInicio.enable()
      this.dataLeituraFinal.enable()
    }else {
      this.dataLeituraInicio.reset()
      this.dataLeituraFinal.reset()
      this.dataLeituraInicio.disable()
      this.dataLeituraFinal.disable()
    }
  }
}

export interface FilterForm {
  obra: FormControl<string>
  autor: FormControl<string[]>
  ordem: FormControl<string>
  editora: FormControl<string[]>
  lido: FormControl<string>
  dataLeituraInicio: FormControl<string | null>
  dataLeituraFinal: FormControl<string | null>
  genero: FormControl<string[]>
  dataCompraInicio: FormControl<string | null>
  dataCompraFinal: FormControl<string | null>
  volumeUnico: FormControl<string>
  idioma: FormControl<string[]>
}