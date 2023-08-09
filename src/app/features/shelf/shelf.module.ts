import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfComponent } from './shelf.component';
import { ShelfListComponent } from './shelf-list/shelf-list.component';
import { ShelfDetailsComponent } from './shelf-details/shelf-details.component';
import { ShelfRoutingModule } from './shelf-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditShelfDialogComponent } from './components/edit-shelf-dialog/edit-shelf-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    ShelfComponent,
    ShelfListComponent,
    ShelfDetailsComponent,
    EditShelfDialogComponent
  ],
  imports: [
    CommonModule,
    ShelfRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class ShelfModule { }
