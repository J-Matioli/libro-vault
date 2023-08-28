import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import { CoreModule } from '../../core.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from 'src/app/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe(NavbarComponent.name, () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let sideNav: SidenavService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({      
      imports: [ 
        CoreModule,
        MatSnackBarModule,
        StoreModule.forRoot(reducers, {
          metaReducers
        }),
        EffectsModule.forRoot([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    sideNav = TestBed.inject(SidenavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${NavbarComponent.prototype.logout.name}
  should navigate after 500 miliseconds when logout method is called`, fakeAsync(() => {
    const navigateSpy = spyOn(router, 'navigate');
    component.logout();
    tick(500);
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  }))

  it(`#${NavbarComponent.prototype.menuChangeState.name}
  should call sidebarChange when called`, () => {
    const sidenavSpy = spyOn(sideNav, 'sidebarChange');
    component.menuChangeState();
    expect(sidenavSpy).toHaveBeenCalledWith('toggle');
  })
});
