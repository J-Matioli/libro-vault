import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasDetailsComponent } from './mangas-details.component';
import { MangasModule } from '../mangas.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';

describe(MangasDetailsComponent.name, () => {
  let component: MangasDetailsComponent;
  let fixture: ComponentFixture<MangasDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MangasModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MangasDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${MangasDetailsComponent.prototype.cardAction.name}
  should navigate to 'VOLUME' details on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');


    if (component.workTypeVolume) {
      expect(component.workTypeVolume).toBeTrue();
      return
    }

    const manga = component.work.$implicit;

    for (let i = 0; i < manga.volumes.length; i++) {

      const evVolume = {
        action: 'GET',
        id: manga.volumes[i].id
      }

      component.cardAction(evVolume)

      expect(navigateSpy)
        .withContext(manga.volumes[i].title)
        .toHaveBeenCalledWith(
          [
            '../../detalhes',
            component["mangaId"]
          ],
          {
            relativeTo: route,
            queryParams: { vol: evVolume.id }
          });
    }
  })

  it(`#${MangasDetailsComponent.prototype.cardAction.name}
  should call 'Edit'method on event action`, () => {
    const navigateSpy = spyOn(component, 'edit');

    if (component.workTypeVolume) {
      expect(component.workTypeVolume).toBeTrue();
      return
    }

    const manga = component.work.$implicit;

    for (let i = 0; i < manga.volumes.length; i++) {

      const evVolume = {
        action: 'EDIT',
        id: manga.volumes[i].id
      }

      component.cardAction(evVolume)

      expect(navigateSpy)
        .withContext(manga.volumes[i].title)
        .toHaveBeenCalledWith();
    }
  })

  it(`#${MangasDetailsComponent.prototype.cardAction.name}
  should call 'removeCard' method on event action`, () => {
    const navigateSpy = spyOn(component, 'removeCard');

    if (component.workTypeVolume) {
      expect(component.workTypeVolume).toBeTrue();
      return
    }

    const manga = component.work.$implicit;

    for (let i = 0; i < manga.volumes.length; i++) {

      const evVolume = {
        action: 'DELETE',
        id: manga.volumes[i].id,
        name: manga.volumes[i].title
      }

      component.cardAction(evVolume)

      expect(navigateSpy)
        .withContext(manga.volumes[i].title)
        .toHaveBeenCalledWith(evVolume.id, evVolume.name);
    }
  })

  it(`#${MangasDetailsComponent.prototype.edit.name}
  should navigate to Edit when this method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.edit();

    expect(navigateSpy)
      .toHaveBeenCalledWith(
        ['../../editar', component['mangaId']], { relativeTo: route }
      );
  })

  it(`#${MangasDetailsComponent.prototype.onBackBtn.name}
  should navigate to previous route when this method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');
   
    component.workTypeVolume = true; 
    fixture.detectChanges();
    component.onBackBtn();

    expect(navigateSpy)
      .toHaveBeenCalledWith(
        ['../../detalhes', component['mangaId']], { relativeTo: route }
      );


    component.workTypeVolume = false; 
    fixture.detectChanges();
    component.onBackBtn();

    expect(navigateSpy)
      .toHaveBeenCalledWith(['mangas']);
  })
});
