import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export class CustomValidators {
  constructor() {}

  static passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);
      
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  static hasOnlySpaces(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      let onlySpaces;

      if(typeof control.value === 'string') {
        if(control.value.length > 0) onlySpaces = control.value.trim().length === 0;    
      }
      
      return onlySpaces? {hasOnlySpaces: true } : null;
    };       
  };

  static hasLowerChar(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      const lowerChar = /^(?=.*[a-záàâãéèêíïóôõöúçñ])/g.test(control.value);
      
      return !lowerChar ? {hasLowerChar: true } : null;
    };       
  };

  static hasUpperChar(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      const upperChar = /^(?=.*[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ])/g.test(control.value);
      
      return !upperChar ? {hasUpperChar: true } : null;
    };       
  };

  static hasNumber(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      const number = /^(?=.*[0-9])/g.test(control.value);
      
      return !number ? {hasNumber: true } : null;
    };       
  };

  static hasSymbol(nameRe: RegExp): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      const symbol = nameRe.test(control.value);
      
      return !symbol ? {hasSymbol: true } : null;
    };       
  };

  
}
