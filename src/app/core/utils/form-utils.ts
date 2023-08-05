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
    obra: FormControl<string | null>
    autor: FormControl<string[] | null>
    editora: FormControl<string | null>  
    idioma: FormControl<string[] | null>
    imagem: FormControl<string | null>
    anotacoes: FormControl<string | null>
    generos: FormControl<string[] | null>
    volumeUnico: FormControl<string | null>
    maisInfo: FormGroup<CustomMaisInfoForm>
    volumes?: FormArray<FormGroup<CustomVolumeForm>>
  }
  
  export interface CustomMaisInfoForm {
    preco: FormControl<string | null>
    pagina: FormControl<string | null>
    dataCompra: FormControl<string | null>
    lido: FormControl<string | null>
    dataLeitura: FormControl<string | null>
  }
  
  export interface CustomVolumeForm {
    volume: FormControl<string | null>,
    imagem: FormControl<string | null>,
    anotacoes: FormControl<string | null>,
    maisInfo: FormGroup<CustomMaisInfoForm>
  }
  