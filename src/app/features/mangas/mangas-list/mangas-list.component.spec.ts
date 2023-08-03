import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasListComponent } from './mangas-list.component';

describe(MangasListComponent.name, () => {
  let component: MangasListComponent;
  let fixture: ComponentFixture<MangasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
