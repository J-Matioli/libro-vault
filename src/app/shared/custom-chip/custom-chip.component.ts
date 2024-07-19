import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipList } from '@angular/material/chips';
import { ascendingOrder, Option } from '../custom-select/custom-select.component';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrls: ['./custom-chip.component.scss']
})
export class CustomChipComponent implements OnInit, OnChanges {

  @Input() label: string = 'Chip';
  @Input() placeholder: string = 'Chip';
  @Input() options: Option[] | null = [];
  @Input() repeatOptions: boolean = false;
  @Input() requiredMessage: string = 'Este campo é obrigatório';
  @Input() required: boolean = false;
  @Input() control:FormControl = new FormControl(null);
  
  @Output() chipsValue: EventEmitter<any> = new EventEmitter<any>(); //Event with input value for filter options 

  public chipControl:FormControl = new FormControl()

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedOptions: Option[] = [];

  @ViewChild("chipList") chipList: MatChipList;
  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['options'].currentValue && !this.repeatOptions) {       
      if(!this.repeatOptions) {
        this.options = (this.options || []).filter(el => !this.selectedOptions.map(val => val.value).includes(el.value));
      }
    }
  }

  requireValidator() {    
    if(this.required && this.control.invalid) {
      this.chipList.errorState = true;
    }else {
      this.chipList.errorState = false;
    }
  }

  onBlur() {
    this.requireValidator();
  }

  ngOnInit(): void {
      this.chipControl.valueChanges
        .pipe(
          debounceTime(500)
        ).subscribe(val => {
          this.chipsValue.emit(val)
      })
   };

  remove(option: Option): void {
    const index = this.selectedOptions
      .map(el => el.value)
      .indexOf(option.value);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    
    this.control.setValue(this.selectedOptions.map(el => el.value));
    this.options?.push(option);
    this.options?.sort((a, b) => ascendingOrder(a, b));
    this.requireValidator();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOptions.push({value: event.option.value, viewValue: event.option.viewValue});
    this.chipInput.nativeElement.value = '';
    this.chipControl.setValue(null);

    this.control.setValue(this.selectedOptions.map(el => el.value));
    if(!this.repeatOptions) {
      this.options = (this.options || []).filter(el => !this.selectedOptions.map(val => val.value).includes(el.value));
    }

    this.requireValidator();    
  }
}
