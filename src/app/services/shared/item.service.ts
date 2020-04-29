import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { map, ignoreElements } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
result:any;
  constructor(public http:HttpClient) { }

  getItems(){
    let url=URL_SERVICIOS+'/item';
    return this.result=this.http.get(url);


  }
  getItemsT(){
    let url=URL_SERVICIOS+'/item/prueba';
    return this.result=this.http.get(url);


  }







}

