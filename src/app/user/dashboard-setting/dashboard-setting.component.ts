import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styles: [
  ]
})
export class DashboardSettingComponent implements OnInit {
  forma: FormGroup;
  usuario: Usuario;
  token;
  imagenSubir:File;
  imagenTemp:any;



  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      img: new FormControl(null, [Validators.required]),


    });
    this.usuario = this._usuarioService.usuario;
    this.forma.setValue({
      nombre: this.usuario.nombre,
      correo: this.usuario.email,
      img: this.usuario.img,
    });
   }

  ngOnInit(): void {
  }


  actualizarUsuario(){
    this.token = localStorage.getItem('token');
    if (this.forma.invalid){
      return;
    }
    const usuarioSave = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.img,

    );
    this._usuarioService.actualizarUsuario(this.usuario._id, usuarioSave, this.token)
    .subscribe(resp => {
      // console.log(resp);
    });

  }

  seleccionImagen(archivo:File){
    if(!archivo){
    this.imagenSubir=null;
      return;
    }
    if(archivo.type.indexOf('image')<0){

    this.imagenSubir=archivo;
    Swal.fire(
      'Error!',
      'El archivo seleccionado no es una imagen',
      'error'
    )
    this.imagenSubir=null;
    return;
  }
    //console.log(event);
    let reader=new FileReader();
    let urlImagenTemp=reader.readAsDataURL(archivo);

    reader.onloadend= ()=> this.imagenTemp= reader.result;
  }

  cambiarImagen(){
    this._usuarioService.cambiarImagen( this.imagenSubir,this.usuario._id)
  }









}
