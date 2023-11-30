import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailOrderComponent } from './components/_ORDERS/detail-order/detail-order.component';
import { AddOrderComponent } from './components/_ORDERS/add-order/add-order.component';



@NgModule({
  declarations: [

  
    DetailOrderComponent,
         AddOrderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule


  ]
})
export class AppModule { }
