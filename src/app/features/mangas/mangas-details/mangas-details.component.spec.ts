import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasDetailsComponent } from './mangas-details.component';

describe('MangasDetailsComponent', () => {
  let component: MangasDetailsComponent;
  let fixture: ComponentFixture<MangasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
