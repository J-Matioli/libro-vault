import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  public validationFinished: boolean = false;
  public validationSuccess: boolean = false;
  private userId: string;
  private token: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.confirmEmail();
  }

  async confirmEmail() {
    await this.getParams();
    this.authService.emailConfirmation({token: this.token, usuarioId: this.userId}).subscribe({
      next: req => {
        this.validationFinished = true;
        this.validationSuccess = true;
      },
      error: err => {
        this.validationFinished = true;
      }
    })
  }

  async getParams(){
    this.token =  encodeURIComponent(this.route.snapshot.queryParams['token']);
    this.userId = this.route.snapshot.queryParams['id'];
  }

}
