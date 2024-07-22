import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Option {
  value: string;
  viewValue: string;
}

export function ascendingOrder (a: Option, b: Option) {
  if (a.viewValue > b.viewValue) {
    return 1;
  }
  if (a.viewValue < b.viewValue) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  @Input() control: FormControl = new FormControl()
  @Input() label: string = 'Select';
  @Input() requiredMessage: string = 'Este campo é obrigatório';
  @Input() reset: boolean = true;
  @Input() multiple: boolean = false;
  @Input() options: Option[] | null = [];
  
  constructor() { }

  ngOnInit(): void { }

}
