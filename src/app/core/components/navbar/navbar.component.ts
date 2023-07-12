import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private sidenav: SidenavService
  ) { }

  ngOnInit(): void {}

  menuChangeState() {
    this.sidenav.sidebarChange('toggle');
  }

  logout() {
    this.sidenav.sidebarChange('close');
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 500);
   }
    
}
