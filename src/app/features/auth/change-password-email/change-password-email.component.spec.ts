import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordEmailComponent } from './change-password-email.component';
import { AuthModule } from '../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe(ChangePasswordEmailComponent.name, () => {
  let component: ChangePasswordEmailComponent;
  let fixture: ComponentFixture<ChangePasswordEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
