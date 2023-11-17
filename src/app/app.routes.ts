import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    { path: 'products/add', component: FormComponent },
    { path: 'products', component: ProductsComponent },
];
