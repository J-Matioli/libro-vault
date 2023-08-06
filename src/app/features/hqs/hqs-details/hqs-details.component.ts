import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/core/utils/Contants';
import { WorkDeleteDialogComponent } from 'src/app/shared/work-delete-dialog/work-delete-dialog.component';

@Component({
  selector: 'app-hqs-details',
  templateUrl: './hqs-details.component.html',
  styleUrls: ['./hqs-details.component.scss']
})
export class HqsDetailsComponent implements OnInit {

  public hq = {
    id: '2',
    title: 'Valerian',
    author: ['Pierre Christin', 'Jean Claude Mézières'],
    publisher: 'SESI',
    language: ['Português'],
    price: '230',
    pages: 945,
    read: true,
    qtdVolumes: 5,
    volumes: [
      {
        id: '1',
        title: 'Valerian',
        author: ['Pierre Christin', 'Jean Claude Mézières'],
        pages: 110,
        read: true,        
        buyDate: new Date(2020, 9, 13),
        genres: ['Ficção científica', 'Space opera'],
        img: 'https://ogimg.infoglobo.com.br/in/21278263-016-014/FT1086A/67354912_Segundo-CadernoCena-do-quadrinho-Valerian.jpg'
      },
      {
        id: '2',
        title: 'Valerian',
        author: ['Pierre Christin', 'Jean Claude Mézières'],
        pages: 110,
        read: true,        
        buyDate: new Date(2020, 9, 13),
        genres: ['Ficção científica', 'Space opera'],
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gPpUD58r0dSs_UKa9etiFMaFNwDY9mQVLy000fBDm8tgIbaKITdHHe-1DrqJO7MLekY&usqp=CAU'
      },
      {
        id: '3',
        title: 'Valerian',
        author: ['Pierre Christin', 'Jean Claude Mézières'],
        pages: 110,
        read: true,        
        buyDate: new Date(2020, 9, 13),
        genres: ['Ficção científica', 'Space opera'],
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EXsos9vwAOP-5KNbUfR3277R7b0BFqlN1PWgDymELgJrbiZJ2shPeksFK27USoF3kns&usqp=CAU'
      },
      {
        id: '4',
        title: 'Valerian',
        author: ['Pierre Christin', 'Jean Claude Mézières'],
        pages: 110,
        read: true,        
        buyDate: new Date(2020, 9, 13),
        genres: ['Ficção científica', 'Space opera'],
        img: 'https://assets.bubblebd.com/img/skbdua7tnr/w6wn29owke.jpg'
      },
      {
        id: '5',
        title: 'Valerian',
        author: ['Pierre Christin', 'Jean Claude Mézières'],
        pages: 110,
        read: true,        
        buyDate: new Date(2020, 9, 13),
        genres: ['Ficção científica', 'Space opera'],
        img: 'https://images.epagine.fr/554/9782205076554_1_75.jpg'
      },
    ],
    anotacoes: 'Fruto da imaginação transbordante de Pierre Christin e Jean-Claude Mézières, os personagens de Valerian e Laureline surgiram pela primeira vez nas páginas de PILOTE, em 1967. Por sua inventividade e audácia, a série rapidamente se tornou referência absoluta para os leitores de histórias em quadrinhos de ficção científica.',
    buyDate: null,
    readDate: null,
    genres: ['Ficção científica', 'Space opera'],
    img: 'https://ogimg.infoglobo.com.br/in/21278263-016-014/FT1086A/67354912_Segundo-CadernoCena-do-quadrinho-Valerian.jpg'
  }

  public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }
  pageSizeOptions: number[] = Constants.pageSizeOptions;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void { }

  edit() {
    this.router.navigate(['../../editar', this.hq.id], {relativeTo: this.route});
  }

  onBackBtn() {
    this.router.navigate(['hqs']);
  }

  cardAction(ev: any) {
    switch (ev.action) {
      case 'GET':
        this.router.navigate(['../../detalhes', this.hq.id, 'volume', ev.id], {relativeTo: this.route});
        break;
      case 'EDIT':
        this.edit();
        break;
      case 'DELETE':
        this.removeCard(ev.id, ev.name);
        break;
      default:
        break;
    }
  }

  removeCard(id: string, name: string) {
    const dialogRef = this.dialog.open(WorkDeleteDialogComponent, {
      restoreFocus: false,
      data: {
        message: `Tem certeza que deseja excluir a hq: <b>${name}</b>?`,
        type: "hq"
      },
    });    

    dialogRef.beforeClosed().subscribe(data => {
      const confirmDelet = data
      console.log('Remove', confirmDelet)
    })
  }

  pageChanged(pageEvent: PageEvent) {
    if (!pageEvent) {
        return;
    }
    console.log(pageEvent)
  }
}
