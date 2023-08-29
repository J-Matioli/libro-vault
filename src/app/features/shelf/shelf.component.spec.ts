import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfComponent } from './shelf.component';
import { ShelfModule } from './shelf.module';

describe(ShelfComponent.name, () => {
  let component: ShelfComponent;
  let fixture: ComponentFixture<ShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShelfModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
