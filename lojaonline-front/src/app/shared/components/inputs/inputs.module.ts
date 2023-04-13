import { NgModule } from '@angular/core';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputEmailComponent } from './input-email/input-email.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputPasswordComponent,
    InputEmailComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InputsModule { }
