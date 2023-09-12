import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppModule } from 'src/app/app.module';

describe(AuthGuard.name, () => {
  let guard: AuthGuard;
  let cookieService: CookieService;
  let router: Router;  
  let jwtHelperService: JwtHelperService;


  beforeEach(async () => {

     await TestBed.configureTestingModule({
      imports: [AppModule]
    })

    guard = TestBed.inject(AuthGuard);
    cookieService = TestBed.inject(CookieService);
    router= TestBed.inject(Router);
    jwtHelperService = TestBed.inject(JwtHelperService);   
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it(`#${AuthGuard.prototype.checkToken.name} should return true if have token`, () => {
    if(!jwtHelperService.isTokenExpired()) {
      expect(guard.checkToken()).toBeTrue();
    }

    expect().nothing();
  });  

  it(`#${AuthGuard.prototype.checkToken.name} should return false if do not have token`, () => {
    if(jwtHelperService.isTokenExpired()) {
      expect(guard.checkToken()).toBeFalse();
    }
  });  

  it(`#${AuthGuard.prototype.checkToken.name} should navigate to login if do not have token`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    cookieService.deleteAll();
    guard.checkToken()
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });  

  it(`#${AuthGuard.prototype.checkToken.name} should navigate to login if do not have token`, () => {
    const cookiesSpy = spyOn(cookieService, 'deleteAll');
    cookieService.delete('_token');
    guard.checkToken()
    expect(cookiesSpy).toHaveBeenCalledWith();
  });
});
