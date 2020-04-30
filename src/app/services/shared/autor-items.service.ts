import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutorItemsService {
usuario:Usuario
  constructor(public http:HttpClient, public _usuarioService:UsuarioService) { }

  getItems(){
    let url=URL_SERVICIOS+'/item';
    return this.http.get(url);


  }
  getItemsAutor(id:string){

    let url=URL_SERVICIOS+'/item/autor/'+id;
    return this.http.get(url);


  }
}
