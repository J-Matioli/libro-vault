import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  @Input() workType: 'livro' | 'manga' | 'hq';

  constructor() { }

  ngOnInit(): void {
  }

  croppedImage(ev: any) {
    console.log('Image base64', ev);
  }

}
