import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsDetailsComponent } from './hqs-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HqsModule } from '../hqs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(HqsDetailsComponent.name, () => {
  let component: HqsDetailsComponent;
  let fixture: ComponentFixture<HqsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HqsModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
