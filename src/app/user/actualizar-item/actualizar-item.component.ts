import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Item } from '../../models/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { ItemService } from '../../services/shared/item.service';
import { ToastrService } from 'ngx-toastr';


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
  itemId='';
  item: Item;
  imagenSubir:File;
  imagenTemp:any;


  constructor(
    public router: Router,
    public activatedRoute:ActivatedRoute,
    public _itemService: ItemService,
    public _usuarioService: UsuarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerDatosUser();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),
      precio: new FormControl(null, Validators.required),
}, );
this.activatedRoute.params.subscribe(params=>{
  console.log(params);
  this.itemId=params.itemId
  console.log(this.itemId);
  this.obtenerItem(this.itemId);
})



// Obtener Token
    this.token = localStorage.getItem('token');
  // console.log(this.token);


// BORRAR
}
borrarItem(){
  this.token = localStorage.getItem('token');

  Swal.fire({

    title: '¿Estás seguro?',
    text: "Esta acción no se puede revertir",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.value) {
      this._itemService.borrarItem(this.itemId,this.item, this.token)
      .subscribe(resp => {
        // console.log(resp);
        setTimeout(()=>{
          this.router.navigate(['/user/dashboard-productos']);
        },2500)

      });
      Swal.fire({
        timer:2000,
        title:'Eliminado',
        text:'El producto ha sido eliminado correctamente',
        icon:'success'
      })
    }
  })
}
// ACTUALIZAR

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

  this._itemService.actualizarItem(this.itemId,item, this.token)
                                    .subscribe(resp => {
                                      // console.log(resp);
                                      setTimeout(()=>{
                                        this.router.navigate(['/user/dashboard-productos']);

                                      },2500)

                                    });

}

obtenerDatosUser(){
  this._usuarioService.obtenerDatos().subscribe((resp: any) => {
    this.usuario = resp;
      // console.log(resp);
       // console.log(this.usuario);
      });

}

obtenerItem(id){

  this._itemService.getItemsId(id).subscribe((resp: any) => {
    this.item = resp.item;
    //console.log(this.item);

    this.forma.setValue({
      nombre: this.item.nombre,
      img: this.item.img,
      categoria: this.item.categoria,
      descripcion:  this.item.descripcion,
      precio:  this.item.precio,
    });

// console.log(resp);
       // console.log(this.usuario);
      });
}

seleccionImagen(archivo:File){
  if(!archivo){
  this.imagenSubir=null;
    return;
  }
  if(archivo.type.indexOf('image')<0){
    //console.log(this.imagenSubir);

  this.toastr.error('El archivo seleccionado no es válido!', null);

      this.imagenSubir=null;
      return;
    }
    this.imagenSubir=archivo;
  //console.log(event);
  let reader=new FileReader();
  let urlImagenTemp=reader.readAsDataURL(archivo);

  reader.onloadend = ()=> this.imagenTemp= reader.result;
}

cambiarImagen(){
  //console.log(this.imagenSubir);
  this._itemService.cambiarImagen( this.imagenSubir,this.item._id,this.token);
  this.toastr.success('Cambios Guardados!', null);
}






}
