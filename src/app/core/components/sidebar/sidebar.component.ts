import { Component, OnInit } from '@angular/core';
import { SvgIcons } from '../../utils/SidebarIcons';

export interface Section {
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SvgIcons]
})
export class SidebarComponent implements OnInit {

  public menuContent: Section[] = [
    {name: 'Home', icon: 'home', route: '/home' },
    {name: 'Livros', icon: 'menu_book' , route: '/livros'},
    {name: 'Mangás', icon: 'manga' , route: '/mangas'},
    {name: 'HQs', icon: 'comic_bubble' , route: '/hqs'},
    {name: 'Estantes', icon: 'list', route: '/estantes' }
  ]

  public menuAssets: Section[] = [
    {name: 'Editoras', icon: 'store' , route: '/editoras'},
    {name: 'Autores', icon: 'person' , route: '/autores'},
    {name: 'Gêneros', icon: 'collections_bookmark' , route: '/generos'}
  ]

  constructor(SvgIcons: SvgIcons) {
    SvgIcons.registryIcons();
  }

  ngOnInit(): void {
  }

}
