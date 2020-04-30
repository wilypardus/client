import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, ignoreElements } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Item } from '../../models/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
result:any;
items: Item[] = [];
totalRegistros : number = 0;
id:string | number;
  constructor(public http:HttpClient) {  }

  getItems(){
    let url=URL_SERVICIOS+'/item';
    return this.result=this.http.get(url);
  }

  getItemsId(id){

    let url=URL_SERVICIOS+'/item/'+id;

    return this.result=this.http.get(url);

  }

  getItemsAutor(id){

    let url=URL_SERVICIOS+'/item/autor/'+id;
    return this.http.get(url);

  }

  // CREAR ITEM
  crearItem(item:Item,token){
    let url = URL_SERVICIOS + '/item?token=' + token;
    return this.http.post(url, item).pipe(map((resp: any) => {
      Swal.fire(
        'Item Creado!',
        item.nombre,
        'success'
      )
      return resp.item;
    }));
    }



}

