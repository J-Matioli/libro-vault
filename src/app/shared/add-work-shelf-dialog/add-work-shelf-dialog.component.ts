import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-work-shelf-dialog',
  templateUrl: './add-work-shelf-dialog.component.html',
  styleUrls: ['./add-work-shelf-dialog.component.scss']
})
export class AddWorkShelfDialogComponent implements OnInit {

  public shelfOptions = [
    {value: '2', viewValue: 'Tops Ficção Científica'},
    {value: '1', viewValue: 'Melhores 2020'},
    {value: '3', viewValue: 'Top 5 2022'}
  ];

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  displayAutoComplete(option: any): string {       
    return option && option.viewValue ? option.viewValue : '';
  }


}
