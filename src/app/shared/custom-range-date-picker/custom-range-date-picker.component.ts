import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-range-date-picker',
  templateUrl: './custom-range-date-picker.component.html',
  styleUrls: ['./custom-range-date-picker.component.scss']
})
export class CustomRangeDatePickerComponent implements OnInit {

  @Input() controlInitial: FormControl = new FormControl()
  @Input() controlfinal: FormControl = new FormControl()
  @Input() label: string = 'Range datepicker';

  constructor() { }

  ngOnInit(): void {
  }

}
