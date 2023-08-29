import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

describe(AuthGuard.name, () => {
  let guard: AuthGuard;
  let cookieService: CookieService;
  let routerService: Router;
  let jwtHelperService: JwtHelperService;


  beforeEach(() => {
    guard = new AuthGuard(cookieService, routerService, jwtHelperService)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
