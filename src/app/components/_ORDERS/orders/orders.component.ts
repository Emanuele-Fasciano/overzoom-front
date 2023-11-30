import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { OrdersService } from '../../../services/orders.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive]
})
export class OrdersComponent implements OnInit {

  ordersListUnformatted: any
  ordersList: any
  constructor(private orders: OrdersService, private router: Router, private store: StoreService) {}

  ngOnInit(): void {
      // recupero i dati della tabella dallo store
    this.store.getOrders().subscribe(data =>{
    this.ordersListUnformatted = data

        // Formatto la data di ciascun ordine usando la libreria date-fns
      this.ordersList = this.ordersListUnformatted.map((order: { date: Date; }) => {
      const dataFormat = new Date(order.date);
      const formattedDate = format(dataFormat, 'dd-MM-yyyy HH:mm');

      // Restituisco un nuovo oggetto con la data formattata
      return { ...order, date: formattedDate };
    });
    });
  }

  detailsOrder(id: number) {
    this.router.navigate(['/show', id]);
    
}

deleteOrder(id: number){
    this.orders.deleteOrder('http://localhost:3000/api/orders/', id).subscribe((data) =>{


    // Aggiorno la tabella dopo l'eliminazione dell'ordine
    // Ottiengo l'URL corrente
    const currentUrl = this.router.url;

    // Navigo alla stessa rotta
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
    
  })
}
}
