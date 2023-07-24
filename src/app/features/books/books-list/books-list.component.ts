import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  public books: any[] = [
    {
      id: '1',
      title: '1984',
      author: ['George Orwell'],
      pages: '400',
      read: true, 
      buyDate: new Date(2023, 2, 22),
      genres: ['Ficção Científica', 'Ficção Distópica'],
      img: 'https://editoraaleph.com.br/wp-content/uploads/2021/02/Alp_13CadastroSiteAleph_1984_Grid.png'
    },
    {
      id: '2',
      title: 'O Iluminado',
      author: ['Stephen King'],
      pages: '500',
      read: true, 
      buyDate: new Date(2023, 2, 10),
      genres: ['Terror', 'Suspense', 'Drama'],
      img: 'https://cdn.quotesgram.com/img/49/19/1956396780-1350845502845114.jpg'
    },
    {
      id: '3',
      title: 'Jogador Nº 1',
      author: ['Ernest Cline'],
      pages: '464',
      read: true, 
      buyDate: null,
      genres: ['Romance', 'Ficção científica'],
      img: 'https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '4',
      title: 'Scrum: A arte de fazer o dobro do trabalho na metade do tempo',
      author: ['Jeff Sutherland', 'J. J. Sutherland'],
      pages: '256',
      read: true, 
      buyDate: null,
      genres: [],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzifx1K-83R4dnGHjqb8Qgfovs_HDJgDUDyOeFHOTyiWrj55I7DPGZz12oTM0O4vagk8&usqp=CAU'
    },
    {
      id: '5',
      title: 'A Bússola de Ouro',
      author: ['Philip Pullman'],
      pages: '344',
      read: true, 
      buyDate: new Date(2020, 2, 10),
      genres: ['Ficção Científica', 'Fantasia'],
      img: 'https://screamyell.com.br/site/wp-content/uploads/2020/01/hisdark.jpg'
    },
    {
      id: '6',
      title: 'A Sutil Arte de Ligar o F*da-Se: Uma estratégia inusitada para uma vida melhor',
      author: ['Mark Manson'],
      pages: '224',
      read: true, 
      buyDate: null,
      genres: ['Autoajuda'],
      img: 'https://m.media-amazon.com/images/I/6175IU0qFgL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '7',
      title: 'As Crônicas de Nárnia',
      author: ['C. S. Lewis'],
      pages: '752',
      read: true, 
      buyDate: null,
      genres: ['Fantasia', 'Aventura'],
      img: 'https://m.media-amazon.com/images/I/91wJzyhRfkL._AC_UF1000,1000_QL80_.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
