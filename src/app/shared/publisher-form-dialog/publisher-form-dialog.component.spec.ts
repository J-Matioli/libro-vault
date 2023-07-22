import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublisherFormDialogComponent } from './publisher-form-dialog.component';


describe(PublisherFormDialogComponent.name, () => {
  let component: PublisherFormDialogComponent;
  let fixture: ComponentFixture<PublisherFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
