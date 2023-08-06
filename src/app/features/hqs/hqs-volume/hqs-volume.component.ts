import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hqs-volume',
  templateUrl: './hqs-volume.component.html',
  styleUrls: ['./hqs-volume.component.scss']
})
export class HqsVolumeComponent implements OnInit {

  public volume = {
    hqId: '3',
    id: '2',
    title: 'Valerian',
    number: 1,
    author: ['Pierre Christin', 'Jean Claude Mézières'],
    publisher: 'SESI',
    language: ['Português'],
    price: '50',
    pages: 110,
    read: true,    
    anotacoes: 'Akira é um dos marcos da ficção científica oriental e revolucionou a chegada dos mangás e da cultura pop japonesa no Ocidente. Ambientada em um cenário pós-apocalíptico da Neo Tokyo, 30 anos depois da III Guerra Mundial, a história é centrada nos personagens Kaneda e Tetsuo, membros de uma gangue de motoqueiros que se deparam com o poder sobrenatural de Akira. A obra foi escrita e ilustrada por Katsuhiro Otomo e tornou-se uma das principais referências da onda cyberpunk década de 1980, ao lado de grandes títulos como Neuromacer, de William Gibson.',
    buyDate: new Date(),
    readDate: new Date(),
    genres: ['Ficção científica', 'Space opera'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gPpUD58r0dSs_UKa9etiFMaFNwDY9mQVLy000fBDm8tgIbaKITdHHe-1DrqJO7MLekY&usqp=CAU'
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['../../editar', this.volume.hqId], {relativeTo: this.route});
  }

  onBackBtn() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
