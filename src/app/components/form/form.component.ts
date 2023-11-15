import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [CommonModule,ReactiveFormsModule]
})
export class FormComponent implements OnInit {

constructor(private products: ProductsService){}
 productForm: any
  ngOnInit(): void {

    this.productForm = new FormGroup({
    name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
  });

}


onSubmit(){

  this.products.addProduct('http://localhost:3000/api/products/', 
  {
    'id' : this.productForm.value.id,
    'name' : this.productForm.value.name,
    'price' : this.productForm.value.price,
    'description' : this.productForm.value.description,

  }).subscribe((data) =>{
    console.log(data);
    
  })
  }

}
