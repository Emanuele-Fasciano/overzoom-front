import { Routes } from '@angular/router';
import { ProductsComponent } from './components/_PRODUCTS/products/products.component';
import { FormComponent } from './components/_PRODUCTS/form/form.component';
import { UpdateFormComponent } from './components/_PRODUCTS/update-form/update-form.component';
import { OrdersComponent } from './components/_ORDERS/orders/orders.component';
import { DetailOrderComponent } from './components/_ORDERS/detail-order/detail-order.component';
import { AddOrderComponent } from './components/_ORDERS/add-order/add-order.component';

// rotte per la navigazione
export const routes: Routes = [
    { path: 'products/add', component: FormComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'edit/:id', component: UpdateFormComponent },

    { path: 'orders', component: OrdersComponent },
    { path: 'show/:id', component: DetailOrderComponent },
    { path: 'orders/add', component: AddOrderComponent },
];
