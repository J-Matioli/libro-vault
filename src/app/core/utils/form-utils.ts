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