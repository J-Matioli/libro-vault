import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Author } from 'src/app/core/models/author';
import { AuthorFormDialogComponent } from 'src/app/shared/author-form-dialog/author-form-dialog.component';
import { CustomTableComponent } from 'src/app/shared/custom-table/custom-table.component';
import { RequestAuthors, Sort } from './store/actions/author.actions';
import { selectAuthorsLoader, selectAuthors, selectAuthorsData } from './store/selectors/author.selectors';
import { Data } from 'src/app/core/models/data';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  @ViewChild(CustomTableComponent) table: CustomTableComponent
  
  public isloading: Observable<boolean> = this.store.select(selectAuthorsLoader)  
  public routeNotReady$: Observable<boolean> = this.store.select(selectAuthorsLoader).pipe(take(2))
  public authors$: Observable<Author[]> = this.store.select(selectAuthors)
  public authorsInfo: Data

  public tableHeaders = {
    nome: 'Editora',
    quantidadeObras: 'Qtd. Obras'
  }

  public pageSettings: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }
  public filter: string = '';
  public sort: Sort = 'Novos';

  constructor(
    private dialog: MatDialog,
    private store: Store
  ) { }

  ngOnInit(): void { 
    this.store.dispatch(new RequestAuthors({data: {
      Ordenar: this.sort || 'Novos'
    } }));
    
    this.store.select(selectAuthorsData).subscribe(data => {
      this.authorsInfo = data;
      this.pageSettings.length = this.authorsInfo.contagemTotalResultados;
      this.pageSettings.pageSize = this.authorsInfo.resultadosExibidosPagina;
      this.pageSettings.pageIndex = this.authorsInfo.paginaAtual - 1;

      if(this.pageSettings.pageIndex === 0) {
        this.table?.paginator.firstPage();
      }
    });
  }

  searchAction(ev: string) {
    this.filter = ev;
    this.store.dispatch(new RequestAuthors({data: {
        PalavraChave: this.filter,
        Ordenar: this.sort || 'Novos',
        ResultadosExibidos: this.authorsInfo.resultadosExibidosPagina
      }
    }));
  }

  pageAction(ev: any) {
    this.store.dispatch(new RequestAuthors({data: {
        PalavraChave: this.filter,
        ResultadosExibidos: ev.pageSize,
        Ordenar: this.sort || 'Novos',
        NumeroPagina: ev.pageIndex + 1
      }})
    );
  }

  sortAction(ev: any) {;
    this.sort = SortTypes[ev.direction as 'asc' | 'desc'] ;
    
    this.store.dispatch(new RequestAuthors({data: {
      PalavraChave: this.filter,
      Ordenar: this.sort || 'Novos',
      ResultadosExibidos: this.authorsInfo.resultadosExibidosPagina
    }
    }));
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

export enum SortTypes {
  'asc' = 'Crescente',
  'desc' = 'Decrescente'
}