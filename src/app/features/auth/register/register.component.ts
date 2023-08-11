import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void { }

  submit(event: any) {
    this.isLoading = true
    this.authService.register(event).subscribe({
      next: res => {
        this.authService.openSnackBar(res['mensagem'][0]);
        this.isLoading = false;
        this.router.navigate(['login']);
      },
      error: err => {this.isLoading = false}
    })
  }
}
