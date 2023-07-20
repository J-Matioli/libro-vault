import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private isMobile!: Observable<any>;

  constructor(
    private sideNav: SidenavService,
    private breakpointObserver: BreakpointObserver
    ) {
      this.isMobile = breakpointObserver
        .observe('(min-width: 991px)')
        .pipe(
          first(),
          tap(({matches}) => {
          if(matches) {            
            this.sideNav.sidebarChange('open');
          }
        }));
   }

  ngOnInit(): void { 
    this.isMobile.subscribe();
  }

}
