import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Constants } from 'src/app/core/utils/Contants';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, OnChanges {


   // Its a key value pair, where key should be matching the columns in the table data, where as
    // the value should be the column display name.
    @Input() columnDefinition: any = {}; 
    // This is an array of the table data which needs to be displayed.
    @Input() tableData: any[] | null;
    // pixles after which the table data must be over flowed.
    @Input() tableOverFlowLimit: any;
 
    dataSource: MatTableDataSource<any>; // its any since, the data type is defined at runtime by the parent component.
    pageSizeOptions: number[] = Constants.pageSizeOptions; // This tells how many items can be displayed per page.
    @Input()pageProperties: PageEvent = Constants.pageSettings();
    // Column definition for the CRUD operations.
    actionColumnName = 'Ações';
    // since, its a crud table, therefore an enum has been defined representing those actions.
    readonly userActions: typeof UserActions = UserActions;
    readonly objectKeys = Object.keys;

    // If this is set to true, then each time the user click the next page, an API call will be made to fetch the data.
    @Input() enableBackendPagination = false;
    // If this is set to true, then each time the user types something in the search text, an API call will be made to fetch the data.
    @Input() enableBackendSearch = false;

    // Tool Tips for the respective CRUD Operations. [define the absolute values from the parent]
    @Input() addRowText: string;
    @Input() editRowText: string;
    @Input() deleteRowText: string;
    @Input() viewDetailRowText: string;

    // Actions to be displayed for respective Table. [dnt forget to actionCalled event if any of them is enabled]
    @Input() displayEditAction: boolean = true;
    @Input() displayDeleteAction: boolean = true;
    @Input() displayDetailAction: boolean = false;
    @Input() displayCreateAction: boolean = false;

    // This is called to notify the parent which CRUD operation is called, along with the current row object.
    @Output() readonly actionCalled = new EventEmitter();
    // This is called to notify the parent when the next, previous or items per page is clicked.
    // If enableBackendPagination is set to true, a call is made to the Parent component, which in turn calls the API.
    @Output() readonly pageEventCalled = new EventEmitter();
    // This is called to notify the parent when the user types in something in the search field.
    // If enableBackendSearch is set to true, a call is made to the Parent component, which in turn calls the API.
    @Output() readonly searchCalled = new EventEmitter();

    // Respective components as per Angular Material Design Guidelines.
    @ViewChild(MatTable, { static: true }) table: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;


   constructor() {
       this.dataSource = new MatTableDataSource([]) as unknown as MatTableDataSource<any>;
   }
  ngOnInit(): void {  }

   ngOnChanges() {
       this.columnDefinition.CRUD_OPERATION = this.actionColumnName;
       this.dataSource.data = this.tableData || [];
       this.dataSource.sort = this.sort;
       if (!this.enableBackendPagination) {
           this.dataSource.paginator = this.paginator;
       }
   }

   applySearchFilter(filterEvent: any) {
        const filterValue = filterEvent.target.value;
       const valueToSearch = filterValue.trim().toLowerCase();
       if(this.enableBackendSearch) {
           this.searchCalled.emit(valueToSearch);      
       }
       if (this.enableBackendPagination) {
           this.paginator.firstPage();
       } else {
           this.dataSource.filter = valueToSearch;
           if (this.dataSource.paginator) {
               this.dataSource.paginator.firstPage();
           }
       }
   }

   performAction(action: any, obj: any) {
       // If actionCalled is not defined, then simply return.
       // Although if actions are enabled then actionCalled should also be defined as well.
       if (!this.actionCalled) {
           return;
       }
       this.actionCalled.emit({
           action,
           obj,
       });
   }

   pageChanged(pageEvent: PageEvent) {
       if (!pageEvent || !this.pageEventCalled) {
           return;
       }
       this.pageEventCalled.emit(pageEvent);
   }
}

export enum UserActions {
  Add = 'ADD',
  Details = 'DETAILS',
  Update = 'UPDATE',
  Delete = 'DELETE',
  Cancel = 'CANCEL',
}