import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShelfDialogComponent } from './edit-shelf-dialog.component';

describe(EditShelfDialogComponent.name, () => {
  let component: EditShelfDialogComponent;
  let fixture: ComponentFixture<EditShelfDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShelfDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShelfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
