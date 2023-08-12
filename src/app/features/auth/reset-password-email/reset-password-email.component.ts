import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-reset-password-email',
  templateUrl: './reset-password-email.component.html',
  styleUrls: ['./reset-password-email.component.scss']
})
export class ResetPasswordEmailComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(event: any) {
    this.isLoading = true;

    const emailFormData = new FormData();

    emailFormData.append('email', event.email)

    this.authService.sendEmailResetPassword(emailFormData).subscribe({
      next: res => {
        this.isLoading = false;
        this.router.navigate(['login']);
      },
      error: err => {this.isLoading = false}
    })
  }

}
