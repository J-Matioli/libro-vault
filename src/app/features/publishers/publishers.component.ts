import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { PublisherFormDialogComponent } from 'src/app/shared/publisher-form-dialog/publisher-form-dialog.component';
import { RequestPublishers } from './store/actions/publisher.actions';
import { Observable, take, tap } from 'rxjs';
import { Publisher } from 'src/app/core/models/publisher';
import { selectPublishers, selectPublishersData, selectPublishersLoader } from './store/selectors/publisher.selectors';
import { Data } from 'src/app/core/models/data';
import { CustomTableComponent } from 'src/app/shared/custom-table/custom-table.component';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  public isloading: boolean;

  @ViewChild(CustomTableComponent) table: CustomTableComponent
  
  public routeNotReady$: Observable<boolean> = this.store.select(selectPublishersLoader).pipe(take(2))
  public publishers$: Observable<Publisher[]> = this.store.select(selectPublishers).pipe(tap(_ => this.isloading = false ))
  public publishersInfo: Data

  public tableHeaders = {
    nome: 'Editora',
    qtdObras: 'Qtd. Obras'
  }

  public pageSettings: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }
  public filter: string = '';

  constructor(
    private dialog: MatDialog,
    private store: Store
  ) { }

  ngOnInit(): void { 
    this.store.dispatch(new RequestPublishers({filter: {} }));
    
    this.store.select(selectPublishersData).subscribe(data => {
      this.publishersInfo = data;
      this.pageSettings.length = this.publishersInfo.contagemTotalResultados;
      this.pageSettings.pageSize = this.publishersInfo.resultadosExibidosPagina;
      this.pageSettings.pageIndex = this.publishersInfo.paginaAtual - 1;

      if(this.pageSettings.pageIndex === 0) {
        this.table?.paginator.firstPage();
      }
    });
  }

  searchAction(ev: string) {
    this.isloading = true
    this.filter = ev;
    this.store.dispatch(new RequestPublishers({filter: {
        PalavraChave: this.filter,
        ResultadosExibidos: this.publishersInfo.resultadosExibidosPagina
      }
    }));
  }

  pageAction(ev: any) {
    this.isloading = true
    this.store.dispatch(new RequestPublishers({filter: {
        PalavraChave: this.filter,
        ResultadosExibidos: ev.pageSize,
        NumeroPagina: ev.pageIndex + 1
      }})
    );
  }

  sortAction(ev: any) {
    console.log(ev);
  }

  userAction(ev?: any) {
    const dialogRef = this.dialog.open(PublisherFormDialogComponent, {
      restoreFocus: false,
      data: {
        action: ev ? ev.action : 'ADD',
        publisher: ev?.obj
      },
    });
  }
}
