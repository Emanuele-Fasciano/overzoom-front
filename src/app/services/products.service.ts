import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }

  // chiamata POST per aggiungere un prodotto
  addProduct(url: string, body: {}){
  return this.http.post(url, body)
  }

  // chiamata PUT per aggiornare un prodotto
  updateProduct(url: string, id: number, body: {}){
    return this.http.put(`${url}${id}`, body)
  }

  // chiamata DELETE per eliminare un prodotto
  deleteProduct(url: string, id: number){
  return this.http.delete(`${url}${id}`)
  }
}
