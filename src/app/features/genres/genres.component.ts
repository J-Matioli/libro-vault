import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { GenreFormDialogComponent } from 'src/app/shared/genre-form-dialog/genre-form-dialog.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  public tableHeaders = {
    id: 'Id',
    name: 'Gênero',
    qtdObras: 'Qtd. Obras'
  }

  public genres = [
    { id: 1, name: 'Aventura', qtdObras: 10 },
    { id: 2, name: 'Comédia', qtdObras: 31 },
    { id: 3, name: 'Drama', qtdObras: 15 },
    { id: 4, name: 'Fantasia', qtdObras: 4 },
    { id: 5, name: 'Romance', qtdObras: 20 },
    { id: 6, name: 'Ficção científica', qtdObras: 13 },
    { id: 7, name: 'Suspense', qtdObras: 9 },
    { id: 8, name: 'Terror', qtdObras: 25 },
    { id: 9, name: 'Autoajuda', qtdObras: 45 },
    { id: 10, name: 'Fábula', qtdObras: 3 }
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
    
    const dialogRef = this.dialog.open(GenreFormDialogComponent, {
      restoreFocus: false,
      data: {
        action: ev ? ev.action : 'ADD',
        genre: ev?.obj
      },
    });
  }

}
