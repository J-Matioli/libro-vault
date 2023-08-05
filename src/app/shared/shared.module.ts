import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
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
import { CardMenuComponent } from './custom-card/components/card-menu/card-menu.component';
import { ArrToStringPipe } from '../core/pipes/arr-to-string.pipe';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CustomChipComponent } from './custom-chip/custom-chip.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { MatRippleModule } from '@angular/material/core';
import { CustomRangeDatePickerComponent } from './custom-range-date-picker/custom-range-date-picker.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MoreInfoFormComponent } from './custom-form/components/more-info-form/more-info-form.component';
import { ImgCropperComponent } from './img-cropper/img-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { VolumeFormComponent } from './custom-form/components/volume-form/volume-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { WorkDeleteDialogComponent } from './work-delete-dialog/work-delete-dialog.component';
import { CustomDetailsComponent } from './custom-details/custom-details.component';
import { DetailsInfoFieldComponent } from './custom-details/components/details-info-field/details-info-field.component';
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
    CardMenuComponent,
    ArrToStringPipe,
    CustomFilterComponent,
    CustomChipComponent,
    CustomSelectComponent,
    CustomRangeDatePickerComponent,
    CustomFormComponent,
    MoreInfoFormComponent,
    ImgCropperComponent,
    VolumeFormComponent,
    WorkDeleteDialogComponent,
    CustomDetailsComponent,
    DetailsInfoFieldComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatMenuModule,
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
    MatRippleModule,
    ImageCropperModule,
    MatCheckboxModule
  ],
  exports: [
    CustomButtonComponent,
    MaskDateDirective,
    CustomTitleComponent,
    CustomTableComponent,
    CustomListComponent,
    CustomFilterComponent,
    CustomFormComponent,
    CustomDetailsComponent,
    CustomCardComponent
  ],
  providers: [
    {provide: MatPaginatorIntl, useValue: getPtPaginatorIntl()},
    CurrencyPipe
  ]
})
export class SharedModule { }
