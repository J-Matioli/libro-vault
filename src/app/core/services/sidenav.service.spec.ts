import { SidenavService } from "./sidenav.service";

describe(SidenavService.name, () =>{
    
    let service: SidenavService;

    beforeEach(() => {
        service = new SidenavService()
    })

    it(`#${SidenavService.prototype.sidebarChange} 
    should emit the change through (changMenu) subject`, () => {
        spyOn(service['changeMenu'], 'next')

        service.sidebarChange('toggle');

        expect(service['changeMenu'].next).toHaveBeenCalledWith('toggle')
    })

    it(`Should recieve "close" value when changMenu.next`
    , done => {
        service.changeMenu$.subscribe(action => {
            expect(action).toBe('close');
            done();
        })

        service.sidebarChange('close');
    })
})