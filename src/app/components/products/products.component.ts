import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive, FormComponent]
})
export class ProductsComponent implements OnInit {

  productsList: any
  constructor(private products: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.products.getProducts('http://localhost:3000/api/products/').subscribe(data =>{
    this.productsList = data
    });

  }

  editProduct(product: any) {
    // console.log(product);
    this.router.navigate(['/edit', product]);
    }

  deleteProduct(id: number) {
      this.products.deleteProduct('http://localhost:3000/api/products/', id).subscribe(
        () => {
          console.log(`Prodotto con ID ${id} eliminato con successo`);
          // Puoi aggiornare la lista dei prodotti o eseguire altre azioni necessarie dopo l'eliminazione.
        },
        error => {
          console.error(`Errore durante l'eliminazione del prodotto con ID ${id}`, error);
          // Gestisci eventuali errori qui
        }
      )
      
      }

}
