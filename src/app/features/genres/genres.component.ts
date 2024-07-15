import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Observable, take } from 'rxjs';
import { Data } from 'src/app/core/models/data';
import { CustomTableComponent } from 'src/app/shared/custom-table/custom-table.component';
import { GenreFormDialogComponent } from 'src/app/shared/genre-form-dialog/genre-form-dialog.component';
import { RequestGenres, Sort } from './store/actions/genre.actions';
import { Store } from '@ngrx/store';
import { Genre } from 'src/app/core/models/genre';
import { selectGenres, selectGenresData, selectGenresLoader } from './store/selectors/genre.selectors';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  @ViewChild(CustomTableComponent) table: CustomTableComponent
  
  public isloading: Observable<boolean> = this.store.select(selectGenresLoader)  
  public routeNotReady$: Observable<boolean> = this.store.select(selectGenresLoader).pipe(take(2))
  public genres$: Observable<Genre[]> = this.store.select(selectGenres)
  public genresInfo: Data

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
    this.store.dispatch(new RequestGenres({data: {
      Ordenar: this.sort || 'Novos'
    } }));
    
    this.store.select(selectGenresData).subscribe(data => {
      this.genresInfo = data;
      this.pageSettings.length = this.genresInfo.contagemTotalResultados;
      this.pageSettings.pageSize = this.genresInfo.resultadosExibidosPagina;
      this.pageSettings.pageIndex = this.genresInfo.paginaAtual - 1;

      if(this.pageSettings.pageIndex === 0) {
        this.table?.paginator.firstPage();
      }
    });
  }

  searchAction(ev: string) {
    this.filter = ev;
    this.store.dispatch(new RequestGenres({data: {
        PalavraChave: this.filter,
        Ordenar: this.sort || 'Novos',
        ResultadosExibidos: this.genresInfo.resultadosExibidosPagina
      }
    }));
  }

  pageAction(ev: any) {
    this.store.dispatch(new RequestGenres({data: {
        PalavraChave: this.filter,
        ResultadosExibidos: ev.pageSize,
        Ordenar: this.sort || 'Novos',
        NumeroPagina: ev.pageIndex + 1
      }})
    );
  }

  sortAction(ev: any) {;
    this.sort = SortTypes[ev.direction as 'asc' | 'desc'] ;
    
    this.store.dispatch(new RequestGenres({data: {
      PalavraChave: this.filter,
      Ordenar: this.sort || 'Novos',
      ResultadosExibidos: this.genresInfo.resultadosExibidosPagina
    }
    }));
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

export enum SortTypes {
  'asc' = 'Crescente',
  'desc' = 'Decrescente'
}