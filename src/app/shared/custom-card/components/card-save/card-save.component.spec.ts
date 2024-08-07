import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaveComponent } from './card-save.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

describe(CardSaveComponent.name, () => {
  let component: CardSaveComponent;
  let fixture: ComponentFixture<CardSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSaveComponent ],
      imports: [ 
        MatDialogModule,
        MatButtonModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
