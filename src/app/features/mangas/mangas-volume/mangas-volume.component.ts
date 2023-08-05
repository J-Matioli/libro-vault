import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mangas-volume',
  templateUrl: './mangas-volume.component.html',
  styleUrls: ['./mangas-volume.component.scss']
})
export class MangasVolumeComponent implements OnInit {

  public volume = {
    mangId: '3',
    id: '2',
    title: 'Akira',
    number: 1,
    author: ['Katsuhiro Otomo'],
    publisher: 'JBC',
    language: ['Português'],
    price: '230',
    pages: '2628',
    read: true,    
    anotacoes: 'Akira é um dos marcos da ficção científica oriental e revolucionou a chegada dos mangás e da cultura pop japonesa no Ocidente. Ambientada em um cenário pós-apocalíptico da Neo Tokyo, 30 anos depois da III Guerra Mundial, a história é centrada nos personagens Kaneda e Tetsuo, membros de uma gangue de motoqueiros que se deparam com o poder sobrenatural de Akira. A obra foi escrita e ilustrada por Katsuhiro Otomo e tornou-se uma das principais referências da onda cyberpunk década de 1980, ao lado de grandes títulos como Neuromacer, de William Gibson.',
    buyDate: new Date(),
    readDate: new Date(),
    genres: ['Cyberpunk', 'Thriller político', 'Ficção científica'],
    img: 'https://upload.wikimedia.org/wikipedia/it/2/29/Akira_film.jpg'
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['../../editar', this.volume.mangId], {relativeTo: this.route});
  }

  onBackBtn() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
