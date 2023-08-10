import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkShelfDialogComponent } from './add-work-shelf-dialog.component';

describe(AddWorkShelfDialogComponent.name, () => {
  let component: AddWorkShelfDialogComponent;
  let fixture: ComponentFixture<AddWorkShelfDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkShelfDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkShelfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
