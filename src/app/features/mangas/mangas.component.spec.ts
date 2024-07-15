import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasComponent } from './mangas.component';
import { MangasModule } from './mangas.module';

describe(MangasComponent.name, () => {
  let component: MangasComponent;
  let fixture: ComponentFixture<MangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MangasModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
