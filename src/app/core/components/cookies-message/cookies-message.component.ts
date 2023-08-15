import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-message',
  templateUrl: './cookies-message.component.html',
  styleUrls: ['./cookies-message.component.scss']
})
export class CookiesMessageComponent implements OnInit {

  public showMessage: boolean = true;

  constructor() { }

  ngOnInit(): void {
     
  }
  
  cookieAccept() {
    console.log('OK');
    localStorage.setItem('cookieMessage', 'false');
  }
}
