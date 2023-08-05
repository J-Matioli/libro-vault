import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/utils/Contants';
import { WorkDeleteDialogComponent } from 'src/app/shared/work-delete-dialog/work-delete-dialog.component';

@Component({
  selector: 'app-mangas-list',
  templateUrl: './mangas-list.component.html',
  styleUrls: ['./mangas-list.component.scss']
})
export class MangasListComponent implements OnInit {

  public mangas: any[] = [
    {
      id: '1',
      title: 'Uzumaki',
      author: ['Junji Ito'],
      pages: 668,
      read: true, 
      buyDate: new Date(2020, 9, 13),
      genres: ['Fantasia sombria', 'Terror psicológico'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvojIdiI1xasB8LGL5Y05hC60Z05sUMYdcw&usqp=CAU'
    },
    {
      id: '2',
      title: 'Akira',
      author: ['Katsuhiro Otomo'],
      pages: 1349,
      read: true, 
      qtdVolumes: 6,
      genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
      img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
    },
    {
      id: '3',
      title: 'Berserk',
      author: ['Kentaro Miura'],
      pages: 5143,
      read: true, 
      qtdVolumes: 41,
      genres: ['Fantasia sombria', 'Alta fantasia'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGm4BiQc5-ONWBL4-jgASr5eoflQcjZ6OqQ&usqp=CAU'
    },
    {
      id: '4',
      title: 'O Estranho Conto da Ilha Panorama',
      author: ['Edogawa Ranpo', 'Suehiro Maruo'],
      pages: 292,
      read: false, 
      buyDate: new Date(2023, 3, 4),
      genres: ['Mistério', 'Ficção'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZhbr6aQxVIm0NXHZgagIzd3cKGG6M3OfLYAut2qRGCnXYHh-AE-Y2IBUVZhjGrdEyhU&usqp=CAU'
    },
    {
      id: '5',
      title: 'Tekkon Kinkreet',
      author: ['Taiyo Matsumoto'],
      pages: 620,
      read: true, 
      buyDate: new Date(2021, 9, 7),
      genres: ['Ação-aventura', 'Drama'],
      img: 'https://ih1.redbubble.net/image.1466760970.5941/mwo,x1000,ipad_2_snap-pad,750x1000,f8f8f8.jpg'
    }
  ]

  public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }
  pageSizeOptions: number[] = Constants.pageSizeOptions;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  filter(ev: any) {
    console.dir(ev);
  }

  pageChanged(pageEvent: PageEvent) {
    if (!pageEvent) {
        return;
    }
    console.log(pageEvent)
  }

  cardAction(ev: any) {
    switch (ev.action) {
      case 'GET':
        this.router.navigate(['./detalhes', ev.id], {relativeTo: this.route});
        break;
      case 'EDIT':
        this.router.navigate(['./editar', ev.id], {relativeTo: this.route});
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

  addMangaRoute() {
    this.router.navigate(['./adicionar'], {relativeTo: this.route})
  }
}
