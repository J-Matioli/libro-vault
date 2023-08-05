import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { CustomVolumeForm } from 'src/app/core/utils/form-utils';


@Component({
  selector: 'app-volume-form',
  templateUrl: './volume-form.component.html',
  styleUrls: ['./volume-form.component.scss']
})
export class VolumeFormComponent implements OnInit {

  public volumeForm: FormGroup<CustomVolumeForm>;
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.volumeForm = this.controlContainer.control as FormGroup<CustomVolumeForm>;
  }

  requireValidator() {
    this.volumeForm.markAllAsTouched();
  }

  croppedImage(ev: any) {
    console.log('Image base64', ev);
  }
}
