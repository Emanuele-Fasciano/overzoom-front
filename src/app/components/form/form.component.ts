import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [CommonModule,ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet]
})
export class FormComponent implements OnInit {

constructor(private products: ProductsService, private router: Router){}
 productForm: any
  ngOnInit(): void {

    // istanzio un nuovo formGroup
    this.productForm = new FormGroup({
    name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
  });

}


onSubmit(){

  // al submit chiamo addProduct e passo l'URL e il body con i dati del form
  this.products.addProduct('http://localhost:3000/api/products/', 
  {
    'id' : this.productForm.value.id,
    'name' : this.productForm.value.name,
    'price' : this.productForm.value.price,
    'description' : this.productForm.value.description,

  }).subscribe((data) =>{
    console.log(data);
    
  })

  // redirect alla pagina products
  this.router.navigate(['./products']);
  }

}
