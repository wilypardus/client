import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    public http:HttpClient
  ) { }

  buscar(termino:string){
    let url=URL_SERVICIOS + '/busqueda/todo/'+termino;
   return this.http.get(url)
  }
}
