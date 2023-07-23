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
    {name: 'Livros', icon: 'menu_book' , route: '#'},
    {name: 'Mangás', icon: 'manga' , route: '#'},
    {name: 'HQs', icon: 'comic_bubble' , route: '#'},
    {name: 'Listas', icon: 'list', route: '#' }
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
