import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';

// rotte per la navigazione
export const routes: Routes = [
    { path: 'products/add', component: FormComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'edit/:id', component: UpdateFormComponent },
];
