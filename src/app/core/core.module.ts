import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavDirective } from './directives/sidenav.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    SidenavDirective
  ]
})
export class CoreModule { }
