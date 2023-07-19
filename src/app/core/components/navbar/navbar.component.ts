import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { MyAccountComponent } from 'src/app/shared/my-account/my-account.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { ChangePasswordComponent } from 'src/app/shared/change-password/change-password.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(
    private router: Router,
    private sidenav: SidenavService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {}

  menuChangeState() {
    this.sidenav.sidebarChange('toggle');
  }

  myAccount() {
    const dialogRef = this.dialog.open(MyAccountComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  logout() {
    this.sidenav.sidebarChange('close');
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 500);
   }
    
}
