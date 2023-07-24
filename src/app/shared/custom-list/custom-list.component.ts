import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  public cards: any[] = Array(15).fill(15, 0, 15)

  constructor() { }

  ngOnInit(): void {
  }

}
