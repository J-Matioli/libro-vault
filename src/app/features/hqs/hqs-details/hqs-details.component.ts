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

  public workTypeVolume: boolean;

  private hqId: string = '2';
  work = {
    $implicit: {
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
    },
    volume: {
      hqId: '3',
      id: '2',
      title: 'Valerian',
      number: 1,
      author: ['Pierre Christin', 'Jean Claude Mézières'],
      publisher: 'SESI',
      language: ['Português'],
      price: '50',
      pages: 110,
      read: true,
      anotacoes: 'Akira é um dos marcos da ficção científica oriental e revolucionou a chegada dos mangás e da cultura pop japonesa no Ocidente. Ambientada em um cenário pós-apocalíptico da Neo Tokyo, 30 anos depois da III Guerra Mundial, a história é centrada nos personagens Kaneda e Tetsuo, membros de uma gangue de motoqueiros que se deparam com o poder sobrenatural de Akira. A obra foi escrita e ilustrada por Katsuhiro Otomo e tornou-se uma das principais referências da onda cyberpunk década de 1980, ao lado de grandes títulos como Neuromacer, de William Gibson.',
      buyDate: new Date(),
      readDate: new Date(),
      genres: ['Ficção científica', 'Space opera'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gPpUD58r0dSs_UKa9etiFMaFNwDY9mQVLy000fBDm8tgIbaKITdHHe-1DrqJO7MLekY&usqp=CAU'
    }
  }

  public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }
  pageSizeOptions: number[] = Constants.pageSizeOptions;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.workTypeVolume = this.route.snapshot.queryParams['vol'] ? true : false;

    this.configureRoute();
  }

  configureRoute() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false
    }

    this.router.onSameUrlNavigation = 'reload';
  }

  edit() {
    this.router.navigate(['../../editar', this.hqId], { relativeTo: this.route });
  }

  onBackBtn() {
    this.workTypeVolume ?
      this.router.navigate(['../../detalhes', this.hqId], { relativeTo: this.route })
      : this.router.navigate(['hqs']);
  }

  cardAction(ev: any) {
    switch (ev.action) {
      case 'GET':
        this.router.navigate(['../../detalhes', this.hqId], { relativeTo: this.route, queryParams: { vol: ev.id } });
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
