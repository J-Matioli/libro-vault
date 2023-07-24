import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() author: string[] = [];
  @Input() id: string = '';
  @Input() buyDate: Date = new Date();
  @Input() pages: number = 0;
  @Input() genres: string[] = [];
  @Input() read: boolean = false;
  @Input() img: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
