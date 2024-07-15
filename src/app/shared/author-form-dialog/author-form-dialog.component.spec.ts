import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorFormDialogComponent } from './author-form-dialog.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import { Author } from 'src/app/core/models/author';
import { authorMock } from 'src/app/core/test/author-test';
import { UpdateAuthor, DeleteAuthor } from 'src/app/features/authors/store/actions/author.actions';
import { authorReducer } from 'src/app/features/authors/store/reducer/author';



describe(AuthorFormDialogComponent.name, () => {
  let component: AuthorFormDialogComponent;
  let fixture: ComponentFixture<AuthorFormDialogComponent>;
  let mockForm: any;
  let mockData: any;
  let store: Store;
  
  beforeEach(async () => {await TestBed.configureTestingModule({
    declarations: [ 
      AuthorFormDialogComponent,
      CustomButtonComponent
    ],
    imports: [ 
      ReactiveFormsModule,
      MatFormFieldModule,
      StoreModule.forRoot({}), 
      StoreModule.forFeature('author', authorReducer),
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

  fixture = TestBed.createComponent(AuthorFormDialogComponent);
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
  spyOn(component, 'addAuthor');
  spyOn(component, 'updateAuthor');
  spyOn(component, 'deleteAuthor');
  mockForm.valid = false;
  component.submit();
  expect(component.isLoading).toBeFalsy();
  expect(component.addAuthor).withContext('addAuthor').not.toHaveBeenCalled();
  expect(component.updateAuthor).withContext('updateAuthor').not.toHaveBeenCalled();
  expect(component.deleteAuthor).withContext('deleteAuthor').not.toHaveBeenCalled();
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

it('should call addAuthor when action is ADD', () => {
  spyOn(component, 'addAuthor');
  mockForm.valid = true;
  mockData.action = 'ADD';
  component.submit();
  expect(component.addAuthor).toHaveBeenCalled();
});

it('should call updateAuthor when action is UPDATE', () => {
  spyOn(component, 'updateAuthor');
  mockForm.valid = true;
  mockData.action = 'UPDATE';
  component.submit();
  expect(component.updateAuthor).toHaveBeenCalled();
});

it('should call deleteAuthor when action is DELETE', () => {
  spyOn(component, 'deleteAuthor');
  mockForm.valid = true;
  mockData.action = 'DELETE';
  component.submit();
  expect(component.deleteAuthor).toHaveBeenCalled();
});

it('should set isLoading to false for default case', () => {
  mockForm.valid = true;
  mockData.action = 'UNKNOWN_ACTION';
  component.submit();
  expect(component.isLoading).toBeFalsy();
});

it('should dispatch UpdateAuthor action with correct payload', () => {
  spyOn(store, 'dispatch').and.callThrough();

  const form: any = new FormGroup({
    nome: new FormControl('new test name')
  });
  
  component.form = form;
  
   const expectedPayload: Author = {
     id: '1',
     nome: 'new test name',
     status: 'Status',
     usuarioId: 'usuarioId'
   };

  component.data = {
    action: 'UPDATE',
    author: authorMock()
  };
  
  component.updateAuthor();
  expect(store.dispatch).toHaveBeenCalledWith(new UpdateAuthor({data: expectedPayload}));
});

it('should dispatch DeleteAuthor action with correct id', () => {
  spyOn(store, 'dispatch').and.callThrough();

  component.data = {
    action: 'DELETE',
    author: authorMock()
  };
  
  component.deleteAuthor();
  expect(store.dispatch).toHaveBeenCalledWith(new DeleteAuthor({id: component.data.author.id}));
});

});
