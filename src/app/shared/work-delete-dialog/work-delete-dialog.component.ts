import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface WorkDeleteDialogData {
  message: string;
  type: string;
}

@Component({
  selector: 'app-work-delete-dialog',
  templateUrl: './work-delete-dialog.component.html',
  styleUrls: ['./work-delete-dialog.component.scss']
})
export class WorkDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: WorkDeleteDialogData) { }

  ngOnInit(): void {
  }
  
}
