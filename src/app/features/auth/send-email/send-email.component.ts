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

    if(event.action === 'RESET_PASSWORD') {
      this.resetPassword(emailFormData);
    }else if(event.action === 'SEND_EMAIL') {
      this.resendConfirmEmail(emailFormData);
    }
  }

  resetPassword(data: any) {
    this.authService.sendEmailResetPassword(data).subscribe({
      next: res => {
        this.sendSuccess(res);
      },
      error: err => {this.isLoading = false}
    })
  }

  resendConfirmEmail(data: any) {
    this.authService.reSendEmailConfirmation(data).subscribe({
      next: res => {this.sendSuccess(res);},
      error: err => {this.isLoading = false}
    })
  }

  sendSuccess(res: any) {
    this.isLoading = false;
    this.authService.openSnackBar(res['mensagem'][0]);
    this.router.navigate(['login']);
  }
}
