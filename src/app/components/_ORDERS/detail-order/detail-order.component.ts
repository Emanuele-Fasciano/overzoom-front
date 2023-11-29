import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { OrdersService } from '../../../services/orders.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-detail-order',
  standalone: true,
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css'],
  imports: [CommonModule, RouterLink]
})
export class DetailOrderComponent implements OnInit {

  orderId: any
  ordersListUnformatted: any
  ordersList: any
  order: any

  constructor(private orders: OrdersService, private readonly route: ActivatedRoute, private store: StoreService, private router: Router) {}
  
  ngOnInit(): void {

      // recupero i dati dallo store
    this.store.getOrders().subscribe(data =>{
    this.ordersListUnformatted = data

        // Formatto la data di ciascun ordine usando la libreria date-fns
      this.ordersList = this.ordersListUnformatted.map((order: { date: Date; }) => {
      const dataFormat = new Date(order.date);
      const formattedDate = format(dataFormat, 'dd-MM-yyyy HH:mm');

      // Restituisco un nuovo oggetto con la data formattata
      return { ...order, date: formattedDate };
    });

    // recupero il parametro dell ID passato dall URL
     this.orderId = this.route.snapshot.params['id'];

     // recupero l'ordine corrispondente all ID
    this.ordersList.forEach((selectedOrder: any) => {
      if(selectedOrder.id == this.orderId){
        this.order = selectedOrder
      }
      
  
    });
     
  
  });
  }
}
