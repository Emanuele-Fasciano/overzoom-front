import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-add-order',
  standalone: true,
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive]
})
export class AddOrderComponent implements OnInit {
  productsList: any
  cart: any = []

  constructor(private store: StoreService, private orders: OrdersService, private router: Router,){}

  ngOnInit(): void {
    // recupero i prodotti dallo store
    this.store.getProducts().subscribe(data =>{
    this.productsList = data

    // Carico il carrello salvato nel localStorage al momento dell'inizializzazione del componente
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
    });
    
  }

  // aggiungo prodotti al carrello
  addProduct(product: any){
    this.cart.push(product)

    // Salvo il carrello aggiornato nel localStorage ogni volta che aggiungo un prodotto
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // elimino prodotti dal carrello
  removeProduct(i: any){
    this.cart.splice(i, 1)

    // Salvo il carrello aggiornato nel localStorage ogni volta che rimuovo un prodotto
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // invio ordine
  sendOrder(cart: any){
    // Creo un oggetto di mappatura per tenere traccia delle quantità per ciascun ID
    const idQuantityMap: any = {};

    // Itero sull'array del carrello per calcolare le quantità
    cart.forEach((item: { id: any; }) => {
      const { id } = item;
      idQuantityMap[id] = (idQuantityMap[id] || 0) + 1;
    });

      // Trasformo l'oggetto di mappatura in un array di oggetti "orderedProducts"
      const orderedProducts = Object.keys(idQuantityMap).map(id => ({
        id: parseInt(id), // Converto l'id in numero, se necessario
        quantity: idQuantityMap[id],
      }));
      
      // al click di 'aggiungi ordine' passo l'url e il body contenente i dati dell'ordine
      this.orders.addOrder('http://localhost:3000/api/orders/', {orderedProducts}).subscribe((data) =>{
        this.router.navigate([`./orders`]);
    
      })

      this.cart = [];
      localStorage.removeItem('cart');
    
  }
  
}
