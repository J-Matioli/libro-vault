import { SidenavService } from '../services/sidenav.service';
import { SidenavDirective } from './sidenav.directive';

describe('SidenavDirective', () => {
  it('should create an instance', () => {
    const service = new SidenavService()
    const directive = new SidenavDirective(service);
    expect(directive).toBeTruthy();
  });
});
