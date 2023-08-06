import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/utils/Contants';
import { WorkDeleteDialogComponent } from 'src/app/shared/work-delete-dialog/work-delete-dialog.component';

@Component({
  selector: 'app-hqs-list',
  templateUrl: './hqs-list.component.html',
  styleUrls: ['./hqs-list.component.scss']
})
export class HqsListComponent implements OnInit {

  public hqs: any[] = [
    {
      id: '1',
      title: 'Black Hole',
      author: ['Charles Burns'],
      pages: 368,
      read: true, 
      buyDate: new Date(2017, 9, 13),
      genres: ['Horror', 'Terror psicológico'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfaLv8pgyVbWUuQFiG3T96_mQ-2G7QA9ZdA&usqp=CAU'
    },
    {
      id: '2',
      title: 'Valerian',
      author: ['Pierre Christin', 'Jean Claude Mézières'],
      pages: 945,
      read: true, 
      qtdVolumes: 5,
      genres: ['Ficção científica', 'Space opera'],
      img: 'https://ogimg.infoglobo.com.br/in/21278263-016-014/FT1086A/67354912_Segundo-CadernoCena-do-quadrinho-Valerian.jpg'
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
        message: `Tem certeza que deseja excluir a hq: <b>${name}</b>?`,
        type: "hq"
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
