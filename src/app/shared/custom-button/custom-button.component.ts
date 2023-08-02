import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() color: 'primary' | 'accent' | 'warn' | '' = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Input() padding: boolean = true;
  @Input() icon: string = '';
  @Input() isLoading: boolean = false;
  @Output() clickButton: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickButton.emit();
  }
}
