import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  display!: boolean;
  currentYear!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.verifyRoute();
    this.getYear();
  }

  verifyRoute() {
    this.router.events.subscribe(event => {
      if(event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;        
        this.display = route?.data['footer'] ?? true;
      }
    })
  }

  getYear() {
    this.currentYear = new Date().getFullYear();
  }

}
