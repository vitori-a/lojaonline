import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  validarTemErros(control : AbstractControl, errorName : string) : boolean {
    if((control.dirty || control.touched) && this.temErros(control, errorName)){
      return true;
    }
    return false;
  }

  temErros(control: AbstractControl, errorName: string) : boolean{
    return control.hasError(errorName);
  }

  validarDataFinal(control: AbstractControl): { [key: string]: boolean } | null {
    const startDate = new Date(control.parent?.get('dataInicio')?.value);
    const endDate = new Date(control.value);

    if (startDate > endDate) {
      return { 'endDateInvalid': true };
    }
    return null;
  }

  validarComprimento(control: AbstractControl, erroNome: string): number {
    const erro = control.errors?.[erroNome];
    return erro?.requiredLength || erro?.min || erro?.max || 0;
  }

}
