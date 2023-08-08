import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/utils/Contants';
import { WorkDeleteDialogComponent } from 'src/app/shared/work-delete-dialog/work-delete-dialog.component';

@Component({
  selector: 'app-mangas-details',
  templateUrl: './mangas-details.component.html',
  styleUrls: ['./mangas-details.component.scss']
})
export class MangasDetailsComponent implements OnInit {

  public workTypeVolume: boolean;

  private mangaId: string = '2';
  work = {
    $implicit: {
      id: '2',
      title: 'Akira',
      author: ['Katsuhiro Otomo'],
      publisher: 'JBC',
      language: ['Português'],
      price: '230',
      pages: 2628,
      read: true,
      qtdVolumes: 6,
      volumes: [
        {
          id: '1',
          title: 'Akira Vol 1',
          author: ['Katsuhiro Otomo'],
          pages: 438,
          read: true,
          buyDate: new Date(2020, 9, 13),
          genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
          img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
        },
        {
          id: '2',
          title: 'Akira Vol 2',
          author: ['Katsuhiro Otomo'],
          pages: 438,
          read: true,
          buyDate: new Date(2020, 9, 13),
          genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
          img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
        },
        {
          id: '3',
          title: 'Akira Vol 3',
          author: ['Katsuhiro Otomo'],
          pages: 438,
          read: true,
          buyDate: new Date(2020, 9, 13),
          genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
          img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
        },
        {
          id: '4',
          title: 'Akira Vol 4',
          author: ['Katsuhiro Otomo'],
          pages: 438,
          read: true,
          buyDate: new Date(2020, 9, 13),
          genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
          img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
        },
        {
          id: '5',
          title: 'Akira Vol 5',
          author: ['Katsuhiro Otomo'],
          pages: 438,
          read: true,
          buyDate: new Date(2020, 9, 13),
          genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
          img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
        },
        {
          id: '6',
          title: 'Akira Vol 6',
          author: ['Katsuhiro Otomo'],
          pages: 438,
          read: true,
          buyDate: new Date(2020, 9, 13),
          genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
          img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
        }
      ],
      anotacoes: 'Akira é um dos marcos da ficção científica oriental e revolucionou a chegada dos mangás e da cultura pop japonesa no Ocidente. Ambientada em um cenário pós-apocalíptico da Neo Tokyo, 30 anos depois da III Guerra Mundial, a história é centrada nos personagens Kaneda e Tetsuo, membros de uma gangue de motoqueiros que se deparam com o poder sobrenatural de Akira. A obra foi escrita e ilustrada por Katsuhiro Otomo e tornou-se uma das principais referências da onda cyberpunk década de 1980, ao lado de grandes títulos como Neuromacer, de William Gibson.',
      buyDate: null,
      readDate: null,
      genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
      img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
    },
    volume: {
      mangId: '3',
      id: '2',
      title: 'Akira',
      number: 1,
      author: ['Katsuhiro Otomo'],
      publisher: 'JBC',
      language: ['Português'],
      price: '230',
      pages: '2628',
      read: true,
      anotacoes: 'Akira é um dos marcos da ficção científica oriental e revolucionou a chegada dos mangás e da cultura pop japonesa no Ocidente. Ambientada em um cenário pós-apocalíptico da Neo Tokyo, 30 anos depois da III Guerra Mundial, a história é centrada nos personagens Kaneda e Tetsuo, membros de uma gangue de motoqueiros que se deparam com o poder sobrenatural de Akira. A obra foi escrita e ilustrada por Katsuhiro Otomo e tornou-se uma das principais referências da onda cyberpunk década de 1980, ao lado de grandes títulos como Neuromacer, de William Gibson.',
      buyDate: new Date(),
      readDate: new Date(),
      genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
      img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
    }
  };

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

  edit() {
    this.router.navigate(['../../editar', this.mangaId], { relativeTo: this.route });
  }

  configureRoute() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false
    }

    this.router.onSameUrlNavigation = 'reload';
  }

  onBackBtn() {
    this.workTypeVolume ?
      this.router.navigate(['../../detalhes', this.mangaId], { relativeTo: this.route })
      : this.router.navigate(['mangas']);
  }

  cardAction(ev: any) {
    switch (ev.action) {
      case 'GET':
        this.router.navigate(['../../detalhes', this.mangaId], { relativeTo: this.route, queryParams: { vol: ev.id } });
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
        message: `Tem certeza que deseja excluir o manga: <b>${name}</b>?`,
        type: "manga"
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
