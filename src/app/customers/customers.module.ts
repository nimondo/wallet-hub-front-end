import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyInputMaskDirective } from './currency-input-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
],
declarations: [
  CurrencyInputMaskDirective
],
exports: [
  CurrencyInputMaskDirective
]
})
export class CustomersModule { }
