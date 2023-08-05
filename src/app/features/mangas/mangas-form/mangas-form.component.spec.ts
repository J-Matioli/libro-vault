import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasFormComponent } from './mangas-form.component';

describe(MangasFormComponent.name, () => {
  let component: MangasFormComponent;
  let fixture: ComponentFixture<MangasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
