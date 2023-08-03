import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangas',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
