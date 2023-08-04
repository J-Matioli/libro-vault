import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasVolumeComponent } from './mangas-volume.component';

describe(MangasVolumeComponent.name, () => {
  let component: MangasVolumeComponent;
  let fixture: ComponentFixture<MangasVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangasVolumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
