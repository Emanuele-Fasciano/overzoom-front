import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailOrderComponent } from './components/_ORDERS/detail-order/detail-order.component';



@NgModule({
  declarations: [

  
    DetailOrderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule


  ]
})
export class AppModule { }
