import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { ItemService } from '../../services/shared/item.service';

@Component({
  selector: 'app-actualizar-item',
  templateUrl: './actualizar-item.component.html',
  styles: [
  ]
})
export class ActualizarItemComponent implements OnInit {
  forma;
  token: string;
  usuario: Usuario;
  itemId:string="5ea9b364bef97478122a3d3a";
  item:Item;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router,
    public _itemService:ItemService
  ) { }

  ngOnInit(): void {
    this.obtenerDatosUser()
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),
      precio: new FormControl(null, Validators.required),
}, );

  this.obtenerItem();

// Obtener Token
    this.token = localStorage.getItem('token');
// console.log(this.token);


    this.forma.setValue({
  nombre: 'Test ACTUALIZADO',
  img: 'https://thumbs.dreamstime.com/z/cartel-de-la-tortuga-creativo-ornamental-del-dise%C3%B1o-con-imagen-vector-estilizado-animal-oc%C3%A9ano-o-mar-ejemplo-ning%C3%BAn-pl%C3%A1stico-154519434.jpg',
  categoria: 'CAT1',
  descripcion: 'Breve descripción del producto 1 asdadsads dasadssad  adssd a dw assa s asasdads asadsads.',
  precio: '13'
});
}

actualizarItem(){
  if (this.forma.invalid){
    return;
  }
  const item = new Item(
    this.forma.value.nombre,
    this.forma.value.img,
    this.forma.value.descripcion,
    this.usuario._id,
    this.forma.value.descripcion,
    this.forma.value.precio,

  );





  this._usuarioService.crearItem(item, this.token)
                                    .subscribe(resp => {
                                      // console.log(resp);
                                      this.router.navigate(['/user/dashboard-productos']);
                                    });

}

obtenerDatosUser(){
  this._usuarioService.obtenerDatos().subscribe((resp: any) => {
    // console.log(resp);
        this.usuario = resp;
       // console.log(this.usuario);
      });

}

obtenerItem(){

  this._itemService.getItemsId(this.itemId).subscribe((resp: any) => {
this.item=resp.item
    console.log(resp);

       // console.log(this.usuario);
      });
}






}
