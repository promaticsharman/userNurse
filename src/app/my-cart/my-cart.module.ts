import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCartRoutingModule } from './my-cart-routing.module';
import { MyCartComponent } from './my-cart.component';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ MyCartComponent],
  imports: [
    CommonModule,
    MyCartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyCartModule { }
