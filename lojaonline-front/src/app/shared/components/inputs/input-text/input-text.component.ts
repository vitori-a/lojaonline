import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() placeholder!: string;
  @Input() formGroup! : FormGroup;
  @Input() controlName! : string;

  constructor(public validacao: ValidarCamposService){}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
