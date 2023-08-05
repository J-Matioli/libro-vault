import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { CustomMaisInfoForm } from 'src/app/core/utils/form-utils';

@Component({
  selector: '[formGroup] app-more-info-form, [formGroupName] app-more-info-form',
  templateUrl: './more-info-form.component.html',
  styleUrls: ['./more-info-form.component.scss']
})
export class MoreInfoFormComponent implements OnInit {

  public moreInfoForm: FormGroup<CustomMaisInfoForm>;

  constructor(
    private controlContainer: ControlContainer,
    private currencyPipe: CurrencyPipe
    ) { }


  ngOnInit(): void {
    this.moreInfoForm = this.controlContainer.control as FormGroup<CustomMaisInfoForm>;

    this.lido.valueChanges.subscribe(data => {      
      this.controlReadInput(data)
    })

    this.preco.valueChanges.subscribe(data => {
      if(data) {
        this.preco.setValue(this.currencyPipe.transform(data.replace(/\D/g, '').replace(/^0+/, ''), 'BRL', 'symbol', '1.0-0'), {emitEvent: false});
      }
    })
  }

  controlReadInput(enable: boolean) {
    if(enable) {
      this.dataLeitura.enable()
    }else {
      this.dataLeitura.reset()
      this.dataLeitura.disable()
    }
  }

  get preco(): FormControl {
    return this.moreInfoForm.get('preco') as FormControl
  }

  get lido(): FormControl {
    return this.moreInfoForm.get('lido') as FormControl
  }

  get dataLeitura(): FormControl {
    return this.moreInfoForm.get('dataLeitura') as FormControl
  }

  get dataCompra(): FormControl {
    return this.moreInfoForm.get('dataCompra') as FormControl
  }

}