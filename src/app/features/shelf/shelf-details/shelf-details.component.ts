import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Params, Router } from '@angular/router';
import { Constants } from 'src/app/core/utils/Contants';
import { EditShelfDialogComponent } from '../components/edit-shelf-dialog/edit-shelf-dialog.component';

@Component({
  selector: 'app-shelf-details',
  templateUrl: './shelf-details.component.html',
  styleUrls: ['./shelf-details.component.scss']
})
export class ShelfDetailsComponent implements OnInit {

  public shelf = { 
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
  }

  public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }
  pageSizeOptions: number[] = Constants.pageSizeOptions;

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cardAction(ev: any, work?: any) {

    const workRoutes = TypedRoutes[work.type as 'book' | 'manga' | 'hq']

    switch (ev.action) {
      case 'GET':
        this.router.navigate([workRoutes, 'detalhes', this.isVolume(work.workId) ? work.workId : work.id ], { queryParams: this.volumeParams(work.workId, ev.id)});
        break;
      case 'EDIT':
        this.router.navigate([workRoutes, 'editar', this.isVolume(work.workId) ? work.workId : work.id ]);
        break;      
      case 'DELETE':
        console.log("DELETE", 'shelf:', this.shelf.id, 'card', ev.id);
        break;
      default:
        break;
    }
  }

  volumeParams(workId: any, volumeId: string): Params | null {

    if(workId) {
      console.log(workId);
      
      return { vol: volumeId }
    }

    return null
  }

  isVolume(workId: string) {
    return workId ? true : false;
  }

  pageChanged(pageEvent: PageEvent) {
    if (!pageEvent) {
        return;
    }
    console.log(pageEvent)
  }

  menuItemClick(type: string) {
    
    const dialogRef = this.dialog.open(EditShelfDialogComponent, {
      restoreFocus: false,
      data: {
        action: type,
        shelf: this.shelf
      },
    });
  }

  onBackBtn() {
    this.router.navigate(['estantes']);
  }
}

export enum TypedRoutes {
  'book' = 'livros',
  'manga' = 'mangas',
  'hq' = 'hqs'
}