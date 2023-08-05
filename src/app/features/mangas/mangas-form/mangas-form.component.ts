import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mangas-form',
  templateUrl: './mangas-form.component.html',
  styleUrls: ['./mangas-form.component.scss']
})
export class MangasFormComponent implements OnInit {

  public actions: typeof Actions = Actions;
  public formType: 'ADD' | 'PUT';
  public  workType: 'manga' = 'manga';

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.formType = this.route.snapshot.data['type']
   }

  ngOnInit(): void { }

  onSubmit(ev: any) {
    console.log('Form value: ', ev)
  }

  backEvent() {
    this.router.navigate(['mangas']);
  }
}

enum Actions {
  'ADD' = 'Adicionar',
  'PUT' = 'Editar'
}