import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavDirective } from './directives/sidenav.directive';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CookiesMessageComponent } from './components/cookies-message/cookies-message.component';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavDirective,
    FooterComponent,
    SidebarComponent,
    CookiesMessageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
    MatMenuModule,
    MatListModule,
    HttpClientModule,
    StoreModule.forFeature('core', fromCore.reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [
    NavbarComponent,
    SidenavDirective,
    FooterComponent,
    SidebarComponent,
    CookiesMessageComponent
  ]
})
export class CoreModule { }
