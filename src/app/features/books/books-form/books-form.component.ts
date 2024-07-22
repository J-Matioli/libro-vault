import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomFormComponent } from 'src/app/shared/custom-form/custom-form.component';
import { AddBook } from '../store/actions/book.actions';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {
  @ViewChild('customForm') customForm!: CustomFormComponent;

  public actions: typeof Actions = Actions;
  public formType: 'ADD' | 'PUT';
  public  workType: 'livro' = 'livro';

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
    ) {
    this.formType = this.route.snapshot.data['type']
   }

  ngOnInit(): void { }

  onSubmit(ev: any) {
    const payload = {
      ...ev,
      tipo: 'Livro'
    }
    this.store.dispatch(new AddBook({data: payload}))
  }

  backEvent() {
    this.router.navigate(['livros']);
  }
  submit() {
    this.customForm.submit()
  }
}

enum Actions {
  'ADD' = 'Adicionar',
  'PUT' = 'Editar'
}