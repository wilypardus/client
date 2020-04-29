import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  limitesItem=[12,18,30];

  ordenar=[{
    titulo:'Precio Ascendente',
    valor: 1
  },
  {
    titulo:'Precio Descendente',
    valor: -1
  },{
    titulo:'Fecha Ascendente',
    valor: 1
  },{
    titulo:'Fecha Descendente',
    valor: -1
  },{
    titulo:'Ventas Ascendente',
    valor: 1
  },{
    titulo:'Ventas Descendente',
    valor: -1
  },
  ];




  constructor() { }







}

