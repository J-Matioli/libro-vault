import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomFormComponent } from 'src/app/shared/custom-form/custom-form.component';

@Component({
  selector: 'app-mangas-form',
  templateUrl: './mangas-form.component.html',
  styleUrls: ['./mangas-form.component.scss']
})
export class MangasFormComponent implements OnInit {
  @ViewChild('customForm') customForm!: CustomFormComponent;

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

  submit() {
    this.customForm.submit()
  }
}

enum Actions {
  'ADD' = 'Adicionar',
  'PUT' = 'Editar'
}