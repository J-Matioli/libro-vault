import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private userId: string;
  private token: string;
  public isLoading: boolean

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  submit(event: any) {
    this.isLoading = true;

    const req = {
      ...event,
      token: this.token,
      usuarioId: this.userId
    }

    this.authService.resetPassword(req).subscribe({
      next: res => {
        this.authService.openSnackBar(res['mensagem'][0]);
        this.isLoading = false;
        this.router.navigate(['login']);
      },
      error: err => {this.isLoading = false}
    })
  }

  getParams(){
    this.token = this.route.snapshot.queryParams['token'];
    this.userId = this.route.snapshot.queryParams['id'];
  }

}
