import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfDetailsComponent } from './shelf-details.component';
import { ShelfModule } from '../shelf.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe(ShelfDetailsComponent.name, () => {
  let component: ShelfDetailsComponent;
  let fixture: ComponentFixture<ShelfDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ShelfModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${ShelfDetailsComponent.prototype.cardAction.name}
  should navigate to details on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const ev = { action: 'GET' }
    const works = component.shelf.works;

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

  it(`#${ShelfDetailsComponent.prototype.cardAction.name}
  should navigate to edit on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const ev = { action: 'EDIT' }
    const works = component.shelf.works;

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