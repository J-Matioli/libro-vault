import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModule } from '../auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SendEmailComponent } from './send-email.component';
import { HttpClientModule } from '@angular/common/http';

describe(SendEmailComponent.name, () => {
  let component: SendEmailComponent;
  let fixture: ComponentFixture<SendEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
