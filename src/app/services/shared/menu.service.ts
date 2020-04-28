import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu:any=[

        {titulo:'Home', url:'/'},
        {titulo:'Items', url:'pages/items'},
        {titulo:'Productos', url:'pages/products'},
        {titulo:'Diseñadores', url:'pages/designer'},
        {titulo:'Contact', url:'pages/contacto'},




  ];


  constructor() { }
}

