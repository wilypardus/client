import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { ItemService } from '../../services/shared/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-item',
  templateUrl: './crear-item.component.html',
  styles: [
  ]
})
export class CrearItemComponent implements OnInit {
forma;
token: string;
usuario: Usuario;
imagenSubir:File;
imagenTemp:any;

  constructor(
    public _usuarioService: UsuarioService,
    public _itemService: ItemService,
    public router: Router,
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

// Obtener Token
    this.token = localStorage.getItem('token');
// console.log(this.token);




    this.forma.setValue({
        nombre: 'Test',
        img: null,
        categoria: 'CAT1',
        descripcion: 'Breve descripción del producto 1 asdadsads dasadssad  adssd a dw assa s asasdads asadsads.',
        precio: '11'

      });
  }

  crearItem(){
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





    this._itemService.crearItem(item, this.token)
                                      .subscribe(resp => {
                                        console.log(resp);
                                      setTimeout(()=>{
                                        this.router.navigate(['/user/dashboard-productos']);
                                      },2500)
                                      this.cambiarImagen(resp._id);

                                      });

  }

  obtenerDatosUser(){
    this._usuarioService.obtenerDatos().subscribe((resp: any) => {
      // console.log(resp);
          this.usuario = resp;
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

  cambiarImagen(id){
    console.log(this.imagenSubir);
    this._itemService.cambiarImagen( this.imagenSubir,id,this.token);

  }


}

