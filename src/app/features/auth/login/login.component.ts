import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  submit(event: any) {
    this.isLoading = true;
    this.authService.login(event).subscribe({
      next: res => {
        this.isLoading = false;
        this.router.navigate(['home']);
      },
      error: err => {this.isLoading = false}
    })
  }
}