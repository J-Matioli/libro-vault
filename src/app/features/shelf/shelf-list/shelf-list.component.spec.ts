import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfListComponent } from './shelf-list.component';
import { ShelfModule } from '../shelf.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe(ShelfListComponent.name, () => {
  let component: ShelfListComponent;
  let fixture: ComponentFixture<ShelfListComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ShelfModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    route = TestBed.inject(ActivatedRoute)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${ShelfListComponent.prototype.details.name}
  should navigate to work details when this method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const id = 'idTeste';
    component.details(id);

    expect(navigateSpy).toHaveBeenCalledWith(['./detalhes', id], {relativeTo: route});
  })

  it(`#${ShelfListComponent.prototype.isVolume.name}
  should return true if workId is valid string`, () => {      
    const workId = 'testeId';
    expect(component.isVolume(workId)).toBeTrue();
  })

  it(`#${ShelfListComponent.prototype.isVolume.name}
  should return false if workId is not a valid string`, () => {
    const wrongWorkIds = ['', undefined];

    for(let i = 0; i < wrongWorkIds.length; i++) {
      expect(component.isVolume(wrongWorkIds[i])).toBeFalse();    
    }
  })

  it(`#${ShelfListComponent.prototype.cardAction.name}
  should navigate to details on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');

    const works = [
      {
        id: 'idTest',
        type: 'book'
      },
      {
        workId: 'hqIdTest',
        id: 'idTest',
        type: 'hq'
      },
      {
        id: 'idTest',
        type: 'manga'
      }

    ]
    
    const ev = { action: 'GET' }

    for(let i = 0; i < works.length; i++) {
      component.cardAction(ev, works[i])

      expect(navigateSpy)
        .withContext(TypedRoutes[works[i].type as 'book' | 'manga' | 'hq'])
        .toHaveBeenCalledWith(
          [
            TypedRoutes[works[i].type as 'book' | 'manga' | 'hq'], 'detalhes',
            component.isVolume(works[i].workId) ? works[i].workId : works[i].id
          ],
          {queryParams: component.volumeParams(works[i].workId, works[i].id)
        });
    }  
  })

  it(`#${ShelfListComponent.prototype.cardAction.name}
  should navigate to edit on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');

    const works = [
      {
        id: 'idTest',
        type: 'book'
      },
      {
        workId: 'hqIdTest',
        id: 'idTest',
        type: 'hq'
      },
      {
        id: 'idTest',
        type: 'manga'
      }

    ]
    
    const ev = { action: 'EDIT' }

    for(let i = 0; i < works.length; i++) {
      component.cardAction(ev, works[i])

      expect(navigateSpy)
        .withContext(TypedRoutes[works[i].type as 'book' | 'manga' | 'hq'])
        .toHaveBeenCalledWith(
          [
            TypedRoutes[works[i].type as 'book' | 'manga' | 'hq'], 'editar',
            component.isVolume(works[i].workId) ? works[i].workId : works[i].id 
          ],
        );
    }  
  })
  
});



export enum TypedRoutes {
  'book' = 'livros',
  'manga' = 'mangas',
  'hq' = 'hqs'
}