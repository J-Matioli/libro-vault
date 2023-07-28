import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {

  public actions: typeof Actions = Actions;
  public formType: 'ADD' | 'PUT';
  private workType: 'livro';

  constructor(private route: ActivatedRoute) {
    this.formType = this.route.snapshot.data['type']
   }

  ngOnInit(): void { }
}

enum Actions {
  'ADD' = 'Adicionar',
  'PUT' = 'Editar'
}