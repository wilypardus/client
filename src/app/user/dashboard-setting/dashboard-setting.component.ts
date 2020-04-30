import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styles: [
  ]
})
export class DashboardSettingComponent implements OnInit {
  forma:FormGroup;
  usuario:Usuario;
  img:string;



  constructor(
    public _usuarioService:UsuarioService
  ) {
    this.forma=new FormGroup({
      nombre:new FormControl(null, Validators.required),
      correo:new FormControl(null, [Validators.required, Validators.email]),

    });





   }

  ngOnInit(): void {
    this.obtenerDatosUser();
  }

  obtenerDatosUser(){

    this._usuarioService.obtenerDatos().subscribe((resp: Usuario) => {
       this.usuario = resp;
       this. img=resp.img;
        //console.log(resp);

        this.forma.setValue({
          nombre:this.usuario.nombre,
          correo:this.usuario.email,


        })
        });

  }

  actualizarUsuario(){
    let token=localStorage.getItem('token');
    if (this.forma.invalid){
      return;
    }
    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.img,

    );
    this._usuarioService.actualizarUsuario(this.usuario._id,this.usuario,token)
    .subscribe(resp => {
      // console.log(resp);
      setTimeout(()=>{


      },2500)

    });

  }









}
