
import { TokenService } from './token.service';
import { CookieService } from 'ngx-cookie-service';

describe(TokenService.name, () => {
  let service: TokenService;
  let cookieservice: CookieService;

  beforeEach(() => {
    service = new TokenService(cookieservice)
})

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
