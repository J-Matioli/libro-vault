import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: '[formGroup] app-more-info-form, [formGroupName] app-more-info-form',
  templateUrl: './more-info-form.component.html',
  styleUrls: ['./more-info-form.component.scss']
})
export class MoreInfoFormComponent implements OnInit {

  public moreInfoForm: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.moreInfoForm = this.controlContainer.control as FormGroup;
  }

}
