import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-update-form',
  standalone: true,
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
  imports: [RouterLink, ReactiveFormsModule]
})
export class UpdateFormComponent implements OnInit {
  productId: any
  productsList: any
  product: any
  updateForm: any

   constructor(private products: ProductsService, private readonly route: ActivatedRoute, private store: StoreService, private router: Router) {}

  ngOnInit() {

    // recupero i dati dallo store
    this.store.getProducts().subscribe(data =>{
    this.productsList = data

    // recupero il parametro dell ID passato dall URL
     this.productId = this.route.snapshot.params['id'];

    // recupero il prodotto corrispondente all ID
    this.productsList.forEach((selectedProduct: any) => {
      if(selectedProduct.id == this.productId){
        this.product = selectedProduct

        // istanzio un nuovo formGroup per l'update dando come valori di default quelli per product selezionato
        this.updateForm = new FormGroup({
          name: new FormControl(`${this.product.name}`),
          price: new FormControl(`${this.product.price}`),
          description: new FormControl(`${this.product.description}`),
      });
      }
  
    });

    });

    
  }

  // sul submit del form chiamo updateProduct e passo URL, ID e i dati aggiornati
  onSubmit(){
  this.products.updateProduct('http://localhost:3000/api/products/',this.productId, 
  {
    'id' : this.productId,
    'name' : this.updateForm.value.name,
    'price' : this.updateForm.value.price,
    'description' : this.updateForm.value.description,

  }).subscribe((data) =>{
    console.log(data);
    
  })
  // redirect alla pagina dei prodotti
  this.router.navigate(['./products']);
  }

}
