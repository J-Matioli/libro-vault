import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public sidenavType!: Observable<MatDrawerMode>;

  constructor(breakpointObserver: BreakpointObserver) { 
      this.sidenavType = breakpointObserver
      .observe('(min-width: 600px)')
      .pipe(map(({matches}) => matches ? 'side' : 'over'));
  }
  
  ngOnInit(): void { }
}
