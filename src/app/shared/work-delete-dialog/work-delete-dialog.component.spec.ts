import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDeleteDialogComponent } from './work-delete-dialog.component';

describe('WorkDeleteDialogComponent', () => {
  let component: WorkDeleteDialogComponent;
  let fixture: ComponentFixture<WorkDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
