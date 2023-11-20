import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive, FormComponent]
})
export class ProductsComponent implements OnInit {

  productsList: any
  constructor(private products: ProductsService, private router: Router, private store: StoreService) {}

  ngOnInit(): void {
    // recupero i dati della tabella dallo store
    this.store.getProducts().subscribe(data =>{
    this.productsList = data
    });

  }

  // sul click del button per l'update(penna) redirect sulla pagina del form dell'update passando ID del prodotto
  updateProduct(productId: any) {
    this.router.navigate(['/edit', productId]);
    }

  // sul click del cestino elimino il prodotto 
  deleteProduct(id: number) {
      this.products.deleteProduct('http://localhost:3000/api/products/', id).subscribe(
        () => {
          console.log(`Prodotto con ID ${id} eliminato con successo`);
        },
        error => {
          console.error(`Errore durante l'eliminazione del prodotto con ID ${id}`, error);
        }
      )
      
      }

}
