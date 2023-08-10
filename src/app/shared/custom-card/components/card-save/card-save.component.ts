import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddWorkShelfDialogComponent } from 'src/app/shared/add-work-shelf-dialog/add-work-shelf-dialog.component';

@Component({
  selector: 'app-card-save',
  templateUrl: './card-save.component.html',
  styleUrls: ['./card-save.component.scss']
})
export class CardSaveComponent implements OnInit {

  @Input() id: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }
  
  saveWork() {
    const dialogRef = this.dialog.open(AddWorkShelfDialogComponent, {
      restoreFocus: false,
      data: {        
        id: this.id
      },
    });    
  }

}
