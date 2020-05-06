import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/shared/item.service';
import { Item } from '../../models/item.model';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';


@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',

})
export class ItemSingleComponent implements OnInit {

  itemId:any;
  item:Item;
  usuario:Usuario;
  totalRegistrosR:number;
  valoracionMedia:number;

  constructor(
    public activatedRoute:ActivatedRoute,
    public _itemService:ItemService,
) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      //console.log(params);
      this.itemId=params.itemId
      //console.log(this.itemId);
      this.obtenerItem(this.itemId);
    })



  }

  obtenerItem(id){

    this._itemService.getItemsId(id).subscribe((resp: any) => {
      this.item = resp.item;
      this.usuario=resp.item.usuario;
      console.error(resp);

  // console.log(resp);
         // console.log(this.usuario);
        });
  }

}
