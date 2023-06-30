import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-email',
  templateUrl: './change-password-email.component.html',
  styleUrls: ['./change-password-email.component.scss']
})
export class ChangePasswordEmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(event: any) {
    console.log(event);    
  }

}
