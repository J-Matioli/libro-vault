import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  @Input() deleteBtn: boolean = true;
  @Input() editBtn: boolean = true;
  @Output() menuAction: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  menuItemClick(ev: string) {
    this.menuAction.emit(ev)
  }
}
