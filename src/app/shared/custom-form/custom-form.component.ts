import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorFormDialogComponent } from '../author-form-dialog/author-form-dialog.component';
import { PublisherFormDialogComponent } from '../publisher-form-dialog/publisher-form-dialog.component';
import { GenreFormDialogComponent } from '../genre-form-dialog/genre-form-dialog.component';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  @Input() workType: 'livro' | 'manga' | 'hq';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  croppedImage(ev: any) {
    console.log('Image base64', ev);
  }

  addVol() {}
  removeVol(i: number) {}

  addAuthor() {
      const dialogRef = this.dialog.open(AuthorFormDialogComponent, {
        restoreFocus: false,
        data: {
          action: 'ADD'
        },
      });
  }
  addPublisher() {
    const dialogRef = this.dialog.open(PublisherFormDialogComponent, {
      restoreFocus: false,
      data: {
        action: 'ADD'
      },
    });
  }
  addGenre() {
    const dialogRef = this.dialog.open(GenreFormDialogComponent, {
      restoreFocus: false,
      data: {
        action: 'ADD'
      },
    });
  }
}
