import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublisherFormDialogComponent } from './publisher-form-dialog.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { Store, StoreModule } from '@ngrx/store';
import { publisherReducer } from 'src/app/features/publishers/store/reducer/publisher';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeletePublisher, UpdatePublisher } from 'src/app/features/publishers/store/actions/publisher.actions';
import { publisherMock } from 'src/app/core/test/publisher-test';
import { Publisher } from 'src/app/core/models/publisher';


describe(PublisherFormDialogComponent.name, () => {
  let component: PublisherFormDialogComponent;
  let fixture: ComponentFixture<PublisherFormDialogComponent>;
  let mockForm: any;
  let mockData: any;
  let store: Store;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PublisherFormDialogComponent,
        CustomButtonComponent
      ],
      imports: [ 
        ReactiveFormsModule,
        MatFormFieldModule,
        StoreModule.forRoot({}), 
        StoreModule.forFeature('publisher', publisherReducer),
        MatButtonModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherFormDialogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();

    mockForm = {
      markAllAsTouched: jasmine.createSpy('markAllAsTouched'),
      valid: false
    };

    component.form = mockForm;

    mockData = {
      action: ''
    };
    component.data = mockData;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark all form fields as touched', () => {
    component.submit();
    expect(mockForm.markAllAsTouched).toHaveBeenCalled();
  });

  it('should not proceed if the form is invalid', () => {
    spyOn(component, 'addPublisher');
    spyOn(component, 'updatePublisher');
    spyOn(component, 'deletePublisher');
    mockForm.valid = false;
    component.submit();
    expect(component.isLoading).toBeFalsy();
    expect(component.addPublisher).withContext('addPublisher').not.toHaveBeenCalled();
    expect(component.updatePublisher).withContext('updatePublisher').not.toHaveBeenCalled();
    expect(component.deletePublisher).withContext('deletePublisher').not.toHaveBeenCalled();
  });

  it('should proceed if the form is valid', () => {
    mockForm.valid = true;
    mockData.action = 'ADD';
    component.submit();
    expect(component.isLoading).toBeTruthy();
  });

  it('should proceed if the form is valid', () => {
    mockForm.valid = true;
    mockData.action = 'ADD';
    component.submit();
    expect(component.isLoading).toBeTruthy();
  });

  it('should call addPublisher when action is ADD', () => {
    spyOn(component, 'addPublisher');
    mockForm.valid = true;
    mockData.action = 'ADD';
    component.submit();
    expect(component.addPublisher).toHaveBeenCalled();
  });

  it('should call updatePublisher when action is UPDATE', () => {
    spyOn(component, 'updatePublisher');
    mockForm.valid = true;
    mockData.action = 'UPDATE';
    component.submit();
    expect(component.updatePublisher).toHaveBeenCalled();
  });

  it('should call deletePublisher when action is DELETE', () => {
    spyOn(component, 'deletePublisher');
    mockForm.valid = true;
    mockData.action = 'DELETE';
    component.submit();
    expect(component.deletePublisher).toHaveBeenCalled();
  });

  it('should set isLoading to false for default case', () => {
    mockForm.valid = true;
    mockData.action = 'UNKNOWN_ACTION';
    component.submit();
    expect(component.isLoading).toBeFalsy();
  });

  it('should dispatch UpdatePublisher action with correct payload', () => {
    spyOn(store, 'dispatch').and.callThrough();

    const form: any = new FormGroup({
      nome: new FormControl('new test name')
    });
    
    component.form = form;
    
     const expectedPayload: Publisher = {
       id: '1',
       nome: 'new test name',
       status: 'Status',
       usuarioId: 'usuarioId'
     };

    component.data = {
      action: 'UPDATE',
      publisher: publisherMock()
    };
    
    component.updatePublisher();
    expect(store.dispatch).toHaveBeenCalledWith(new UpdatePublisher({data: expectedPayload}));
  });

  it('should dispatch DeletePublisher action with correct id', () => {
    spyOn(store, 'dispatch').and.callThrough();

    component.data = {
      action: 'DELETE',
      publisher: publisherMock()
    };
    
    component.deletePublisher();
    expect(store.dispatch).toHaveBeenCalledWith(new DeletePublisher({id: component.data.publisher.id}));
  });

});
