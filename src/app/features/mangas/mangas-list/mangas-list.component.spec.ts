import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasListComponent } from './mangas-list.component';
import { MangasModule } from '../mangas.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';

describe(MangasListComponent.name, () => {
  let component: MangasListComponent;
  let fixture: ComponentFixture<MangasListComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        MangasModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${MangasListComponent.prototype.cardAction.name}
  should navigate to details on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const mangas = component.mangas;

    for(let i = 0; i < mangas.length; i++) {

      const ev = { 
        action: 'GET',
        id: mangas[i].id
      }

      component.cardAction(ev)
            
      expect(navigateSpy)
        .withContext(mangas[i].title)
        .toHaveBeenCalledWith(
          [
            './detalhes',
            ev.id
          ],
          {relativeTo: route
        });
    }  
  })

  it(`#${MangasListComponent.prototype.cardAction.name}
  should navigate to edit on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const mangas = component.mangas;

    for(let i = 0; i < mangas.length; i++) {

      const ev = { 
        action: 'EDIT',
        id: mangas[i].id
      }

      component.cardAction(ev)
            
      expect(navigateSpy)
        .withContext(mangas[i].title)
        .toHaveBeenCalledWith(
          [
            './editar',
            ev.id
          ],
          {relativeTo: route
        });
    }  
  })

  it(`#${MangasListComponent.prototype.addMangaRoute.name}
  should navigate to Add when is method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    
      component.addMangaRoute()
            
      expect(navigateSpy)    
        .toHaveBeenCalledWith(
          ['./adicionar'], {relativeTo: route}
        );
  })
});
