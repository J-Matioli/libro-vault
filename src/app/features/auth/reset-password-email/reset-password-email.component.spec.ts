import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordEmailComponent } from './reset-password-email.component';
import { AuthModule } from '../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe(ResetPasswordEmailComponent.name, () => {
  let component: ResetPasswordEmailComponent;
  let fixture: ComponentFixture<ResetPasswordEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
