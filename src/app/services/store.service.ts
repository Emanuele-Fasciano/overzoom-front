import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

    // chiamata GET per recuperare tutti i prodotti
    getProducts(){
    return  this.http.get('http://localhost:3000/api/products/')
  }

      // chiamata GET per recuperare tutti i prodotti
    getOrders(){
    return  this.http.get('http://localhost:3000/api/orders/')
  }
}
