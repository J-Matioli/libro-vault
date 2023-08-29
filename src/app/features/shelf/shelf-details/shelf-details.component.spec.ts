import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfDetailsComponent } from './shelf-details.component';
import { ShelfModule } from '../shelf.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(ShelfDetailsComponent.name, () => {
  let component: ShelfDetailsComponent;
  let fixture: ComponentFixture<ShelfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ShelfModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
