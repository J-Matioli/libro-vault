import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardComponent } from './custom-card.component';
import { ArrToStringPipe } from 'src/app/core/pipes/arr-to-string.pipe';
import { MatCardModule } from '@angular/material/card';
import { CardSaveComponent } from './components/card-save/card-save.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

describe(CustomCardComponent.name, () => {
  let component: CustomCardComponent;
  let fixture: ComponentFixture<CustomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CustomCardComponent,
        CardMenuComponent,
        CardSaveComponent,
        ArrToStringPipe
      ],
      imports: [
        MatCardModule,
        MatMenuModule,
        MatDialogModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
