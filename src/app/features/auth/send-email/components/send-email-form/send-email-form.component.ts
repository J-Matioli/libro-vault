import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.scss']
})
export class SendEmailFormComponent implements OnInit {
  public form!: FormGroup<EmailForm>;
  @Input() isLoading: boolean = false;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit(): void { }

  createForm(): void {
    this.form = this.fb.group<EmailForm>({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
    })
  }

  get email() { return this.form.get('email'); }  

  submit() {
    if(this.form.valid) {     
      this.formSubmit.emit(this.form.value)
    }
  }

}

export interface EmailForm {
  email: FormControl<string | null>
}