import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss']
})
export class CustomFilterComponent implements OnInit {

  form: FormGroup;

  expandedIndex = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.fb.group({
      pesquisa: [''],
      editora: [''],
      ordem: ['']
    })
  }


  clearInput(ev: string) {
    this.form.get('pesquisa')?.reset();
  }
}
