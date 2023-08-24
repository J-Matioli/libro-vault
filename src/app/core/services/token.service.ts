import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenService {

  constructor(private cookieService: CookieService) { }

  getAsyncToken() {
    return this.cookieService.get('_token');
  }
}
