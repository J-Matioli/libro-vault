import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { PublisherFormDialogComponent } from 'src/app/shared/publisher-form-dialog/publisher-form-dialog.component';
import { RequestPublishers } from './store/actions/publisher.actions';
import { Observable, tap } from 'rxjs';
import { Publisher } from 'src/app/core/models/publisher';
import { selectPublishers } from './store/selectors/publisher.selectors';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  public publishers$: Observable<Publisher[]> = this.store.select(selectPublishers)
    .pipe(
      tap((data: Publisher[]) => console.log(data))
    );

  public tableHeaders = {
    nome: 'Editora',
    qtdObras: 'Qtd. Obras'
  }

  public pageSettings: PageEvent = { length: 10, pageIndex: 0, pageSize: 10 }

  constructor(
    private dialog: MatDialog,
    private store: Store
  ) { }

  ngOnInit(): void { 
    this.store.dispatch(new RequestPublishers({filter: {}}));
  }


  searchAction(ev: any) {
    console.log(ev)
  }

  pageAction(ev: any) {
    console.log(ev)
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
