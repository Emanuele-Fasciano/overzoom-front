import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-update-form',
  standalone: true,
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  productsList: any
  product: any;
   constructor(private readonly route: ActivatedRoute, private store: StoreService) {}

  ngOnInit() {

    // recupero i dati dallo store
    this.store.getProducts().subscribe(data =>{
    this.productsList = data

    // recupero il parametro dell ID passato dall URL
    const productId = this.route.snapshot.params['id'];

    // recupero il prodotto corrispondente all ID
    this.productsList.forEach((selectedProduct: any) => {
      if(selectedProduct.id == productId){
        this.product = selectedProduct
      }
    
    });

    });
    
  }

}
