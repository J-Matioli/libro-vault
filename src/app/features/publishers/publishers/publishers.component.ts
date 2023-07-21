import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  public tableHeaders = { 
    id: 'Id',
    name: 'Editora',
    qtdObras: 'Qtd. Obras'
  }

  public publishers = [
  { id: 1, name: 'Panini', qtdObras: 7 },
  { id: 2, name: 'JBC', qtdObras: 4 },
  { id: 3, name: 'Pipoca e Nanquim', qtdObras: 3 },
  { id: 4, name: 'Devir', qtdObras: 2 },
  { id: 5, name: 'NewPop', qtdObras: 1 },
  { id: 6, name: 'DarkSide', qtdObras: 1 },
  { id: 7, name: 'L&PM', qtdObras: 2 },
  { id: 8, name: 'Companhia das Letras', qtdObras: 3 },
  { id: 9, name: 'SESI', qtdObras: 2 },
  { id: 10, name: 'Rocco', qtdObras: 1 }
] 

 public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }

constructor() { }

ngOnInit(): void {}

userAction(ev: any) {
  console.log(ev)
}

searchAction(ev: any) {
  console.log(ev)
}

pageAction(ev: any) {
  console.log(ev)
}
  
}
