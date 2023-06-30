import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordEmailFormComponent } from './change-password-email-form.component';

describe(ChangePasswordEmailFormComponent.name, () => {
  let component: ChangePasswordEmailFormComponent;
  let fixture: ComponentFixture<ChangePasswordEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordEmailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
