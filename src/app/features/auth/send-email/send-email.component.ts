import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

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
