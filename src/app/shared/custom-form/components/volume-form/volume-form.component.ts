import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-form',
  templateUrl: './volume-form.component.html',
  styleUrls: ['./volume-form.component.scss']
})
export class VolumeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  croppedImage(ev: any) {
    console.log('Image base64', ev);
  }
}
