import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyAccountComponent } from './my-account/my-account.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaskDateDirective } from '../core/utils/mask-date';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomTitleComponent } from './custom-title/custom-title.component';
import { MatDividerModule } from '@angular/material/divider';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { getPtPaginatorIntl } from '../core/utils/Contants';
import { PublisherFormDialogComponent } from './publisher-form-dialog/publisher-form-dialog.component';
import { AuthorFormDialogComponent } from './author-form-dialog/author-form-dialog.component';
import { GenreFormDialogComponent } from './genre-form-dialog/genre-form-dialog.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    MyAccountComponent,
    MaskDateDirective,
    ChangePasswordComponent,
    CustomTitleComponent,
    CustomTableComponent,
    PublisherFormDialogComponent,
    AuthorFormDialogComponent,
    GenreFormDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,    
    MatTooltipModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  exports: [
    CustomButtonComponent,
    MaskDateDirective,
    CustomTitleComponent,
    CustomTableComponent
  ],
  providers: [
    {provide: MatPaginatorIntl, useValue: getPtPaginatorIntl() }
  ]
})
export class SharedModule { }
