import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.component.html',
  styleUrls: ['./img-cropper.component.scss']
})
export class ImgCropperComponent {
  
  @Output() image: '' = '';
  @Output() newImage: EventEmitter<any> = new EventEmitter();

  public imageChangedEvent: any = '';
  private croppedImage: any = '';
  
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    
    if(!this.imageChangedEvent.target.value) {
      this.newImage.emit('');
    }
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64
    this.newImage.emit(this.croppedImage);
  }

  loadImageFailed() {
      console.log('Não foi possível carregar esta imagem')
  }

}
