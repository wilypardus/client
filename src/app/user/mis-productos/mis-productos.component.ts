import { Component, OnInit } from '@angular/core';
import { AutorItemsService } from '../../services/shared/autor-items.service';
import { Item } from '../../models/item.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { ItemService } from '../../services/shared/item.service';
import { FiltrosService } from '../../services/shared/filtros.service';




@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styles: [
  ]
})
export class MisProductosComponent implements OnInit {

  //public id="5ea1b395f3adb10113a6c402";
  items:Item[]=[];
  totalRegistros:number=0;
  usuario:Usuario;
  p: number = 1;
  limite=12;
  id:string;

    constructor(public _autorItemsService:AutorItemsService, public _usuarioService:UsuarioService,public _itemsService:ItemService,public _filtrosService:FiltrosService,) { }

  ngOnInit(): void {

  //   this._autorItemsService.getItemsAutor(this.id).subscribe((resp:any)=>{
  //     console.log(resp);

  //     this.items=resp.item;
  //     this.totalRegistros=resp.item.length;

  //     console.log(this.totalRegistros);
  // })
this.id = localStorage.getItem('id');



}

cambiarLimite(){
  this.items=[];
  this._autorItemsService.getItemsAutor(this.id).subscribe((resp:any)=>{
    this.items=resp.tabla;
    this.usuario=resp.tabla.usuario;
    console.log(this.totalRegistros);
    console.log(this.items);

    })
}

}
