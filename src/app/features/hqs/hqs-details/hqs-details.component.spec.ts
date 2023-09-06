import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsDetailsComponent } from './hqs-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HqsModule } from '../hqs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';

describe(HqsDetailsComponent.name, () => {
  let component: HqsDetailsComponent;
  let fixture: ComponentFixture<HqsDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HqsModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqsDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${HqsDetailsComponent.prototype.cardAction.name}
  should navigate to 'VOLUME' details on event action`, () => {
    const navigateSpy = spyOn(router, 'navigate');


    if (component.workTypeVolume) {
      expect(component.workTypeVolume).toBeTrue();
      return
    }

    const hq = component.work.$implicit;

    for (let i = 0; i < hq.volumes.length; i++) {

      const evVolume = {
        action: 'GET',
        id: hq.volumes[i].id
      }

      component.cardAction(evVolume)

      expect(navigateSpy)
        .withContext(hq.volumes[i].title)
        .toHaveBeenCalledWith(
          [
            '../../detalhes',
            component["hqId"]
          ],
          {
            relativeTo: route,
            queryParams: { vol: evVolume.id }
          });
    }
  })

  it(`#${HqsDetailsComponent.prototype.cardAction.name}
  should call 'Edit'method on event action`, () => {
    const navigateSpy = spyOn(component, 'edit');

    if (component.workTypeVolume) {
      expect(component.workTypeVolume).toBeTrue();
      return
    }

    const haq = component.work.$implicit;

    for (let i = 0; i < haq.volumes.length; i++) {

      const evVolume = {
        action: 'EDIT',
        id: haq.volumes[i].id
      }

      component.cardAction(evVolume)

      expect(navigateSpy)
        .withContext(haq.volumes[i].title)
        .toHaveBeenCalledWith();
    }
  })

  it(`#${HqsDetailsComponent.prototype.cardAction.name}
  should call 'removeCard' method on event action`, () => {
    const navigateSpy = spyOn(component, 'removeCard');

    if (component.workTypeVolume) {
      expect(component.workTypeVolume).toBeTrue();
      return
    }

    const hq = component.work.$implicit;

    for (let i = 0; i < hq.volumes.length; i++) {

      const evVolume = {
        action: 'DELETE',
        id: hq.volumes[i].id,
        name: hq.volumes[i].title
      }

      component.cardAction(evVolume)

      expect(navigateSpy)
        .withContext(hq.volumes[i].title)
        .toHaveBeenCalledWith(evVolume.id, evVolume.name);
    }
  })

  it(`#${HqsDetailsComponent.prototype.edit.name}
  should navigate to Edit when this method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.edit();

    expect(navigateSpy)
      .toHaveBeenCalledWith(
        ['../../editar', component['hqId']], { relativeTo: route }
      );
  })

  it(`#${HqsDetailsComponent.prototype.onBackBtn.name}
  should navigate to previous route when this method is called`, () => {
    const navigateSpy = spyOn(router, 'navigate');
   
    component.workTypeVolume = true; 
    fixture.detectChanges();
    component.onBackBtn();

    expect(navigateSpy)
      .toHaveBeenCalledWith(
        ['../../detalhes', component['hqId']], { relativeTo: route }
      );


    component.workTypeVolume = false; 
    fixture.detectChanges();
    component.onBackBtn();

    expect(navigateSpy)
      .toHaveBeenCalledWith(['hqs']);
  })
});
