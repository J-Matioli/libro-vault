import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void { }

  submit(event: any) {
    this.isLoading = true;
    this.authService.login(event).subscribe({
      next: res => {
        this.cookieService.set('_token', res.dados.accessToken);
        this.cookieService.set('_id', res.dados.id);
        this.isLoading = false;
        this.router.navigate(['home']);
      },
      error: err => {this.isLoading = false}
    })
  }
}