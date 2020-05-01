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
  forma: FormGroup;
  usuario: Usuario;

  token;



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









}
