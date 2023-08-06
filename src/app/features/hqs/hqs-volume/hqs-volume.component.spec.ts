import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsVolumeComponent } from './hqs-volume.component';

describe('HqsVolumeComponent', () => {
  let component: HqsVolumeComponent;
  let fixture: ComponentFixture<HqsVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsVolumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
