import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router, RoutesRecognized } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public sidenavType!: Observable<MatDrawerMode>;
  public displayNavbar!: boolean;

  constructor(
    breakpointObserver: BreakpointObserver,
    private router: Router) { 
      this.sidenavType = breakpointObserver
      .observe('(min-width: 600px)')
      .pipe(map(({matches}) => matches ? 'side' : 'over'));
  }
  
  ngOnInit(): void { 
    this.verifyRouteToShowSidenav();
  }

  verifyRouteToShowSidenav() {
    this.router.events.subscribe(event => {
      if(event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;        
        this.displayNavbar = route?.data['toolbar'] ?? true;
      }
    })
  }
}
