
import { Injectable, Input, EventEmitter, Output } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, ignoreElements } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Review } from '../../models/review.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  result:any;

  @Output('totalRegistrosReview') registros: EventEmitter <number> = new EventEmitter;
  totalRegistros;
  constructor(
    public http:HttpClient,
    public router:Router
  ) { }

//Obtener Reviews de item
  getItemReviews(itemId){

    let url=URL_SERVICIOS+'/itemReview/?id='+itemId;

    return this.result=this.http.get(url)
  }

  // Crear Review
  crearReview(review:Review,token){
    let url = URL_SERVICIOS + '/itemReview?token=' + token;
    return this.http.post(url, review).pipe(map((resp: any) => {
      Swal.fire({
        timer:2000,
        text:'Gracias por tu valoración!',
        icon:'success',
      }).then( ()=> {
        this.router.navigate(['/user/dashboard-productos']);



      })
      return resp.item;
    }));
}
}
