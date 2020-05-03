import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './author.component.html',
  styles: [
  ]
})
export class AuthorComponent implements OnInit {
usuario:Usuario

  constructor(
    public _usuarioService:UsuarioService,
    public activatedRoute:ActivatedRoute

  ) {

    this.activatedRoute.params.subscribe(params=>{
      //console.log(params);
      const nombreUsr=params.usr
      //console.log(nombreUsr);
      this.obtenerDatos(nombreUsr);
    })
   }

  ngOnInit(): void {}

  obtenerDatos(nombre:string){
    this._usuarioService.obtenerDatosUsrName(nombre)
    .subscribe(resp => {
      //console.log(resp);
      this.usuario=resp.usuario[0];
     // console.log(this.usuario);
    });
  }

}
