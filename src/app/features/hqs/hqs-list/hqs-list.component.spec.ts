import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsListComponent } from './hqs-list.component';
import { HqsModule } from '../hqs.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe(HqsListComponent.name, () => {
  let component: HqsListComponent;
  let fixture: ComponentFixture<HqsListComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HqsModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${HqsListComponent.prototype.cardAction.name}
  should navigate to details on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const hqs = component.hqs;

    for(let i = 0; i < hqs.length; i++) {

      const ev = { 
        action: 'GET',
        id: hqs[i].id
      }

      component.cardAction(ev)
            
      expect(navigateSpy)
        .withContext(hqs[i].title)
        .toHaveBeenCalledWith(
          [
            './detalhes',
            ev.id
          ],
          {relativeTo: route
        });
    }  
  })

  it(`#${HqsListComponent.prototype.cardAction.name}
  should navigate to edit on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    const hqs = component.hqs;

    for(let i = 0; i < hqs.length; i++) {

      const ev = { 
        action: 'EDIT',
        id: hqs[i].id
      }

      component.cardAction(ev)
            
      expect(navigateSpy)
        .withContext(hqs[i].title)
        .toHaveBeenCalledWith(
          [
            './editar',
            ev.id
          ],
          {relativeTo: route
        });
    }  
  })

  it(`#${HqsListComponent.prototype.addHqRoute.name}
  should navigate to Add when is method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');
    
      component.addHqRoute()
            
      expect(navigateSpy)    
        .toHaveBeenCalledWith(
          ['./adicionar'], {relativeTo: route}
        );
  })
});
