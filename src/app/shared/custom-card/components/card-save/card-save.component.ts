import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-save',
  templateUrl: './card-save.component.html',
  styleUrls: ['./card-save.component.scss']
})
export class CardSaveComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit(): void { }

}
