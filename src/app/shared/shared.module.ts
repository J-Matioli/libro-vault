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


@NgModule({
  declarations: [
    CustomButtonComponent,
    MyAccountComponent,
    MaskDateDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,    
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  exports: [
    CustomButtonComponent,
    MyAccountComponent,
    MaskDateDirective
  ]
})
export class SharedModule { }
