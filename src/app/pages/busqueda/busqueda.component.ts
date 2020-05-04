import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/shared/search.service';
import { Usuario } from '../../models/usuario.model';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  usuarios:Usuario;
  items:Item;
  totalRegistros;
  totalRegistrosUser;

  termino;

  constructor(
    public activatedRoute:ActivatedRoute,
    public _searchService:SearchService
  ) {
activatedRoute.params.subscribe(params=>{
  this.termino=params['termino'];
  console.log("termino",this.termino);
  // this._searchService.buscar(this.termino).subscribe((resp:any)=>{
  //   this.usuarios=resp.usuarios;
  //   this.items=resp.items;

  //   console.log("usuarios",this.usuarios);
  //   console.log("items",this.items);


  // })



})

  }

  ngOnInit(): void {
  }



}
