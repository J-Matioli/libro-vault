import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-details',
  templateUrl: './custom-details.component.html',
  styleUrls: ['./custom-details.component.scss']
})
export class CustomDetailsComponent implements OnInit {

  @Input() work: any;

  constructor() { }

  ngOnInit(): void {
  }

}
