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
import { CustomListComponent } from './custom-list/custom-list.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { MatCardModule } from '@angular/material/card';
import { CardSaveComponent } from './custom-card/components/card-save/card-save.component';
import { CardRemoveComponent } from './custom-card/components/card-remove/card-remove.component';
import { ArrToStringPipe } from '../core/pipes/arr-to-string.pipe';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CustomChipComponent } from './custom-chip/custom-chip.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { MatRippleModule } from '@angular/material/core';

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
    GenreFormDialogComponent,
    CustomListComponent,
    CustomCardComponent,
    CardSaveComponent,
    CardRemoveComponent,
    ArrToStringPipe,
    CustomFilterComponent,
    CustomChipComponent,
    CustomSelectComponent
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
    CdkAccordionModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,    
    MatTooltipModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatRippleModule
  ],
  exports: [
    CustomButtonComponent,
    MaskDateDirective,
    CustomTitleComponent,
    CustomTableComponent,
    CustomListComponent,
    CustomFilterComponent
  ],
  providers: [
    {provide: MatPaginatorIntl, useValue: getPtPaginatorIntl() }
  ]
})
export class SharedModule { }
