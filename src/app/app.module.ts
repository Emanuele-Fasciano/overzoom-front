import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
  
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule


  ]
})
export class AppModule { }
