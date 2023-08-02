import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {

  public book = {
    id: '1',
    title: '1984',
    author: ['George Orwell'],
    publisher: 'Companhia das Letras',
    language: ['Português'],
    price: '38',
    pages: '400',
    read: true, 
    anotacoes: 'Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.',
    buyDate: new Date(2023, 2, 22),
    readDate: new Date(2023, 2, 22),
    genres: ['Ficção Científica', 'Ficção Distópica'],
    img: 'https://editoraaleph.com.br/wp-content/uploads/2021/02/Alp_13CadastroSiteAleph_1984_Grid.png'
  }

  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['../../editar', this.book.id], {relativeTo: this.route});
  }

  onBackBtn() {
    this.router.navigate(['livros']);
  }
}
