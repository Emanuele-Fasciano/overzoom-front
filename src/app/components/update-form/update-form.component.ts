import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  standalone: true,
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

   constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];

    // Mostra i dettagli del prodotto
    console.log('Ricevuto prodotto:', productId);
  }

}
