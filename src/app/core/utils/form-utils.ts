import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormUtils {

    constructor() { }

    protected patterns = {
        onlyLetters: /[a-zA-Z\u00C0-\u00FFáàâãăéèêíïóôõöúüçñÁÀÂÃĂÉÈÍÏÓÔÕÖÚÜÇ ´`Ñ]/i,
        letterAndNumbers: /[a-zA-Z0-9\u00C0-\u00FFáàâãăéèêíïóôõöúüçñÁÀÂÃĂÉÈÍÏÓÔÕÖÚÜÇ ´`Ñ]/i,
      }

    protected  preventChar(event: KeyboardEvent, regEx: RegExp) {
        return regEx.test(event.key)
    }

    protected  maxBorn(): Date{    
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDate();
        
        return new Date(currentYear - 1, currentMonth, currentDay);
    }
}


export interface CustomForm {
    nome: FormControl<string>
    autorId: FormControl<string[]>
    editoraId: FormControl<any>  
    idioma: FormControl<string[]>
    imagem: FormControl<string>
    anotacao: FormControl<string>
    generoId: FormControl<string[]>
    volumeUnico: FormControl<boolean>
    maisInfo: FormGroup<CustomMaisInfoForm>
    volumes?: FormArray<FormGroup<CustomVolumeForm>> | FormArray
  }
  
  export interface CustomMaisInfoForm {
    preco: FormControl<string>
    pagina: FormControl<number  | null>
    dataCompra: FormControl<string>
    lido: FormControl<boolean>
    dataLeitura: FormControl<string>
  }
  
  export interface CustomVolumeForm {
    volume: FormControl<string>,
    imagem: FormControl<string>,
    anotacao: FormControl<string>,
    maisInfo: FormGroup<CustomMaisInfoForm>
  }
  