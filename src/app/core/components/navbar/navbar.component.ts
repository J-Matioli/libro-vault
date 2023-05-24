import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  display!: boolean;

  constructor(
    private router: Router,
    private sidenav: SidenavService
  ) { }

  ngOnInit(): void {
    this.verifyRoute();
  }

  verifyRoute() {
    this.router.events.subscribe(event => {
      if(event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;        
        this.display = route?.data['toolbar'] ?? true;
      }
    })
  }

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
