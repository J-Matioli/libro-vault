import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { AuthorFormDialogComponent } from 'src/app/shared/author-form-dialog/author-form-dialog.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  public tableHeaders = {
    id: 'Id',
    name: 'Autor',
    qtdObras: 'Qtd. Obras'
  }

  public authors = [
    { id: 1, name: 'Junji Ito', qtdObras: 10 },
    { id: 2, name: 'Margaret Atwood', qtdObras: 2 },
    { id: 3, name: 'Neil Gaiman', qtdObras: 3 },
    { id: 4, name: 'Inio Asano', qtdObras: 4 },
    { id: 5, name: 'C. S. Lewis', qtdObras: 1 },
    { id: 6, name: 'George Orwell', qtdObras: 1 },
    { id: 7, name: 'Jules Verne', qtdObras: 3 },
    { id: 8, name: 'Ursula K. Le Guin', qtdObras: 1 },
    { id: 9, name: 'Isaac Asimov', qtdObras: 1 },
    { id: 10, name: 'Franz Kafka', qtdObras: 1 }
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
    const dialogRef = this.dialog.open(AuthorFormDialogComponent, {
      restoreFocus: false,
      data: {
        action: ev ? ev.action : 'ADD',
        author: ev?.obj
      },
    });
  }

}
