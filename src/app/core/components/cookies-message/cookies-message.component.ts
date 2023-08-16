import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-message',
  templateUrl: './cookies-message.component.html',
  styleUrls: ['./cookies-message.component.scss']
})
export class CookiesMessageComponent implements OnInit {

  public cookiesAccepted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.cookiesAccepted = this.getCookies();
  }
  
  getCookies() {   
    return !!localStorage.getItem('cookiesAccepted');
  }

  cookieAccept() {
    localStorage.setItem('cookiesAccepted', 'true');
    this.cookiesAccepted = this.getCookies();
  }
}
