import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipList } from '@angular/material/chips';
@Component({
  selector: 'app-custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrls: ['./custom-chip.component.scss']
})
export class CustomChipComponent implements OnInit, AfterViewInit {

  @Input() label: string = 'Chip';
  @Input() placeholder: string = 'Chip';
  @Input() options: any[] = [];
  @Input() control:FormControl = new FormControl(null);
  
  @Output() chipsValue: EventEmitter<any> = new EventEmitter<any>(); //Event with input value for filter options 

  public chipControl:FormControl = new FormControl()

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedOptions: string[] = [];

  @ViewChild("chipList") chipList: MatChipList;
  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;

  constructor() { }

  ngAfterViewInit(): void { 
    console.log(this.chipList)
    this.chipList.errorState = true
  }

  ngOnInit(): void {
   }

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
