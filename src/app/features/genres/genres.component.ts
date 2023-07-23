import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { AuthorFormDialogComponent } from 'src/app/shared/author-form-dialog/author-form-dialog.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  public tableHeaders = {
    id: 'Id',
    genre: 'Gênero',
    qtdObras: 'Qtd. Obras'
  }

  public genres = [
    { id: 1, genre: 'Aventura', qtdObras: 10 },
    { id: 2, genre: 'Comédia', qtdObras: 31 },
    { id: 3, genre: 'Drama', qtdObras: 15 },
    { id: 4, genre: 'Fantasia', qtdObras: 4 },
    { id: 5, genre: 'Romance', qtdObras: 20 },
    { id: 6, genre: 'Ficção científica', qtdObras: 13 },
    { id: 7, genre: 'Suspense', qtdObras: 9 },
    { id: 8, genre: 'Terror', qtdObras: 25 },
    { id: 9, genre: 'Autoajuda', qtdObras: 45 },
    { id: 10, genre: 'Fábula', qtdObras: 3 }
  ]

  public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }


  searchAction(ev: any) {
    console.log(ev)
  }

  pageAction(ev: any) {
    console.log(ev)
  }

  userAction(ev?: any) {    
    
  }

}
