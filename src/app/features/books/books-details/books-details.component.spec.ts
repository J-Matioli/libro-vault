import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetailsComponent } from './books-details.component';
import { BooksModule } from '../books.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe(BooksDetailsComponent.name, () => {
  let component: BooksDetailsComponent;
  let fixture: ComponentFixture<BooksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        BooksModule,
        AppRoutingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
