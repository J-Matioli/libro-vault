import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersComponent } from './publishers.component';
import { PublishersModule } from './publishers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(PublishersComponent.name, () => {
  let component: PublishersComponent;
  let fixture: ComponentFixture<PublishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        PublishersModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
