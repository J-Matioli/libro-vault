import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Option {
  value: string;
  viewValue: string;
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
  @Input() options: Option[] = [];
  
  constructor() { }

  ngOnInit(): void { }

}
