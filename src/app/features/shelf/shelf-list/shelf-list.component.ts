import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/core/utils/Contants';

@Component({
  selector: 'app-shelf-list',
  templateUrl: './shelf-list.component.html',
  styleUrls: ['./shelf-list.component.scss']
})
export class ShelfListComponent implements OnInit {

  public shelfs = [
    { 
      id: '1',
      titulo: 'Top 10 - 2021',
      works: [
        {
          id: '2',
          title: 'Valerian',
          author: ['Pierre Christin', 'Jean Claude Mézières'],
          pages: 945,
          read: true, 
          type: 'hq',
          qtdVolumes: 5,
          genres: ['Ficção científica', 'Space opera'],
          img: 'https://ogimg.infoglobo.com.br/in/21278263-016-014/FT1086A/67354912_Segundo-CadernoCena-do-quadrinho-Valerian.jpg'
        },
        {
          id: '1',
          title: '1984',
          author: ['George Orwell'],
          pages: 400,
          type: 'book',
          read: true, 
          buyDate: new Date(2023, 2, 22),
          genres: ['Ficção Científica', 'Ficção Distópica'],
          img: 'https://editoraaleph.com.br/wp-content/uploads/2021/02/Alp_13CadastroSiteAleph_1984_Grid.png'
        },
        {
          id: '2',
          title: 'Akira',
          author: ['Katsuhiro Otomo'],
          type: 'manga',
          pages: 1349,
          read: true, 
          qtdVolumes: 6,
          genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
          img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
        },
        {
          id: '3',
          title: 'Jogador Nº 1',
          author: ['Ernest Cline'],
          pages: 464,
          type: 'book',
          read: true, 
          buyDate: null,
          genres: ['Romance', 'Ficção científica'],
          img: 'https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg'
        },
      ]
    },
    { 
      id: '2',
      titulo: 'Melhores de 2023',
      works: [
        {
          id: '1',
          title: 'Black Hole',
          author: ['Charles Burns'],
          pages: 368,
          type: 'hq',
          read: true, 
          buyDate: new Date(2017, 9, 13),
          genres: ['Horror', 'Terror psicológico'],
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaLv8pgyVbWUuQFiG3T96_mQ-2G7QA9ZdA&usqp=CAU'
        },
        {
          id: '2',
          title: 'O Iluminado',
          author: ['Stephen King'],
          type: 'book',
          pages: 500,
          read: true, 
          buyDate: new Date(2023, 2, 10),
          genres: ['Terror', 'Suspense', 'Drama'],
          img: 'https://cdn.quotesgram.com/img/49/19/1956396780-1350845502845114.jpg'
        },        
        {
          workId: '2',
          id: '3',
          title: 'Berserk',
          type: 'manga',
          author: ['Kentaro Miura'],
          pages: 5143,
          read: true, 
          qtdVolumes: 41,
          genres: ['Fantasia sombria', 'Alta fantasia'],
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGm4BiQc5-ONWBL4-jgASr5eoflQcjZ6OqQ&usqp=CAU'
        }
      ]
    },
  ]

  public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }
  pageSizeOptions: number[] = Constants.pageSizeOptions;

  constructor( 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cardAction(ev: any, work?: any) {

    const workRoutes = TypedRoutes[work.type as 'book' | 'manga' | 'hq']

    switch (ev.action) {
      case 'GET':
        this.router.navigate([workRoutes, 'detalhes', this.isVolume(work.workId) ? work.workId : work.id ], { queryParams: this.volumeParams(work.workId, work.id)});
        break;
      case 'EDIT':
        this.router.navigate([workRoutes, 'editar', this.isVolume(work.workId) ? work.workId : work.id ]);
        break;      
      default:
        break;
    }
  }

  volumeParams(workId: any, volumeId: string): Params | null {

    if(workId) {      
      return { vol: volumeId }
    }

    return null
  }

  isVolume(workId: string | undefined) {
    return workId ? true : false;
  }

  pageChanged(pageEvent: PageEvent) {
    if (!pageEvent) {
        return;
    }
    console.log(pageEvent)
  }

  details(id: string) {
    this.router.navigate(['./detalhes', id], {relativeTo: this.route});
  }

}

export enum TypedRoutes {
  'book' = 'livros',
  'manga' = 'mangas',
  'hq' = 'hqs'
}