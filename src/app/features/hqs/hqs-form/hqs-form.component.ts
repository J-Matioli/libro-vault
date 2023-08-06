import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hqs-form',
  templateUrl: './hqs-form.component.html',
  styleUrls: ['./hqs-form.component.scss']
})
export class HqsFormComponent implements OnInit {

  public actions: typeof Actions = Actions;
  public formType: 'ADD' | 'PUT';
  public  workType: 'hq' = 'hq';

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
    this.router.navigate(['hqs']);
  }

}

enum Actions {
  'ADD' = 'Adicionar',
  'PUT' = 'Editar'
}