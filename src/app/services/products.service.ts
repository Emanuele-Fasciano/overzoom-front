import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }

  addProduct(url: string, body: {}){
  return this.http.post(url, body)
  }

  getProducts(url: string){
  return  this.http.get(url)
  }

  deleteProduct(url: string, id: number){
  return this.http.delete(`${url}${id}`)
  }
}