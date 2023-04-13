import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { InputsModule } from './components/inputs/inputs.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    InputsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    InputsModule,
  ],
})
export class SharedModule { }
