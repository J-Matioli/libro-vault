import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCropperComponent } from './img-cropper.component';
import { ImageCropperComponent, ImageCropperModule } from 'ngx-image-cropper';

describe(ImgCropperComponent.name, () => {
  let component: ImgCropperComponent;
  let fixture: ComponentFixture<ImgCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ImgCropperComponent,
        ImageCropperComponent
      ],
      imports: [ ImageCropperModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
