import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFormDialogComponent } from './genre-form-dialog.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { Store, StoreModule } from '@ngrx/store';
import { Genre } from 'src/app/core/models/genre';
import { DeleteGenre, UpdateGenre } from 'src/app/features/genres/store/actions/genre.actions';
import { genreMock } from 'src/app/core/test/genre-test';
import { genreReducer } from 'src/app/features/genres/store/reducer/genre';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(GenreFormDialogComponent.name, () => {
  let component: GenreFormDialogComponent;
  let fixture: ComponentFixture<GenreFormDialogComponent>;
  let mockForm: any;
  let mockData: any;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GenreFormDialogComponent,
        CustomButtonComponent
      ],
      imports: [ 
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        StoreModule.forRoot({}), 
        StoreModule.forFeature('genre', genreReducer),
        MatFormFieldModule,
        HttpClientTestingModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreFormDialogComponent);
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
    spyOn(component, 'addGenre');
    spyOn(component, 'updateGenre');
    spyOn(component, 'deleteGenre');
    mockForm.valid = false;
    component.submit();
    expect(component.isLoading).toBeFalsy();
    expect(component.addGenre).withContext('addGenre').not.toHaveBeenCalled();
    expect(component.updateGenre).withContext('updateGenre').not.toHaveBeenCalled();
    expect(component.deleteGenre).withContext('deleteGenre').not.toHaveBeenCalled();
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

  it('should call addGenre when action is ADD', () => {
    spyOn(component, 'addGenre');
    mockForm.valid = true;
    mockData.action = 'ADD';
    component.submit();
    expect(component.addGenre).toHaveBeenCalled();
  });

  it('should call updateGenre when action is UPDATE', () => {
    spyOn(component, 'updateGenre');
    mockForm.valid = true;
    mockData.action = 'UPDATE';
    component.submit();
    expect(component.updateGenre).toHaveBeenCalled();
  });

  it('should call deleteGenre when action is DELETE', () => {
    spyOn(component, 'deleteGenre');
    mockForm.valid = true;
    mockData.action = 'DELETE';
    component.submit();
    expect(component.deleteGenre).toHaveBeenCalled();
  });

  it('should set isLoading to false for default case', () => {
    mockForm.valid = true;
    mockData.action = 'UNKNOWN_ACTION';
    component.submit();
    expect(component.isLoading).toBeFalsy();
  });

  it('should dispatch UpdateGenre action with correct payload', () => {
    spyOn(store, 'dispatch').and.callThrough();

    const form: any = new FormGroup({
      nome: new FormControl('new teste name')
    });
    
    component.form = form;
    
     const expectedPayload: Genre = {
       id: '1',
       nome: 'new teste name',
       status: 'Status',
       usuarioId: 'usuarioId'
     };

    component.data = {
      action: 'UPDATE',
      genre: genreMock()
    };
    
    component.updateGenre();
    expect(store.dispatch).toHaveBeenCalledWith(new UpdateGenre({data: expectedPayload}));
  });

  it('should dispatch DeleteGenre action with correct id', () => {
    spyOn(store, 'dispatch').and.callThrough();

    component.data = {
      action: 'DELETE',
      genre: genreMock()
    };
    
    component.deleteGenre();
    expect(store.dispatch).toHaveBeenCalledWith(new DeleteGenre({id: component.data.genre.id}));
  });
});
