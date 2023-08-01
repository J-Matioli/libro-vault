import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuComponent } from './card-menu.component';

describe(CardMenuComponent.name, () => {
  let component: CardMenuComponent;
  let fixture: ComponentFixture<CardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
