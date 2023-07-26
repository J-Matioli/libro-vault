import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrls: ['./custom-chip.component.scss']
})
export class CustomChipComponent implements OnInit {

  @Input() label: string = 'Chip';
  @Input() placeholder: string = 'Chip';
  @Input() options: any[] = [];
  @Input() control:FormControl = new FormControl([]);
  
  @Output() chipsValue: EventEmitter<any> = new EventEmitter<any>(); //Event with input value for filter options 
  
  public chipControl:FormControl = new FormControl('');

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedOptions: string[] = [];

  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void { }

  remove(option: string): void {
    const index = this.selectedOptions.indexOf(option);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    
    this.control.setValue(this.selectedOptions);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOptions.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.chipControl.setValue(null);

    this.control.setValue(this.selectedOptions);
  }
}
