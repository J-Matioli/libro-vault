import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-info-field',
  templateUrl: './details-info-field.component.html',
  styleUrls: ['./details-info-field.component.scss']
})
export class DetailsInfoFieldComponent implements OnInit {

  @Input() title: string = '';
  @Input() value: string | any[] | null = '';

  constructor() { }

  ngOnInit(): void {
  }

}
