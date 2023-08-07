import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() author: string[] = [];
  @Input() id: string = '';
  @Input() buyDate: Date | undefined | null = new Date();
  @Input() volumes: number | undefined = 0;
  @Input() pages: number | undefined = 0;
  @Input() genres: string[] = [];
  @Input() read: boolean | undefined = false;
  @Input() img: string | undefined = '';

  @Input() showDelete: boolean = true;
  @Input() showEdit: boolean = true;
  @Input() showMenu: boolean = true;

  @Output() userAction: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  
  userActionMenu(ev: string) {
    this.userAction.emit({
      id: this.id,
      name: this.title,
      action: ev
    });
  }

}
