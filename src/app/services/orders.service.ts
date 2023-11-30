import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

 constructor( private http: HttpClient ) { }

   // chiamata POST per aggiungere un ordine
  addOrder(url: string, body: {}){
  return this.http.post(url, body)
  }

  // chiamata DELETE per eliminare un ordine
  deleteOrder(url: string, id: number){
  return this.http.delete(`${url}${id}`)
  }
}
