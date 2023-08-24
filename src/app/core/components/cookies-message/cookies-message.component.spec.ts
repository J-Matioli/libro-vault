import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesMessageComponent } from './cookies-message.component';

describe(CookiesMessageComponent.name, () => {
  let component: CookiesMessageComponent;
  let fixture: ComponentFixture<CookiesMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiesMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
