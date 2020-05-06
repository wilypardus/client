
import { Injectable, Input, EventEmitter, Output } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, ignoreElements } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Review } from '../../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  result:any;

  @Output('totalRegistrosReview') registros: EventEmitter <number> = new EventEmitter;
  totalRegistros;
  constructor(
    public http:HttpClient,
  ) { }


  getItemReviews(itemId){

    let url=URL_SERVICIOS+'/itemReview/?id='+itemId;

    return this.result=this.http.get(url)
  }
}
