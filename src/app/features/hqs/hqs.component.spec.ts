import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsComponent } from './hqs.component';
import { HqsModule } from './hqs.module';

describe(HqsComponent.name, () => {
  let component: HqsComponent;
  let fixture: ComponentFixture<HqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HqsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
