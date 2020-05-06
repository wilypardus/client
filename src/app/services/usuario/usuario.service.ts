import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';


import { map, ignoreElements } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { SubirArchivoService } from '../shared/subir-archivo.service';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario;
  token:string;



  constructor(
    public http:HttpClient,
    public router:Router,
    public _subirArchivoService:SubirArchivoService,
    private toastr: ToastrService

    )
  {
    //console.log('Servicio usuario listo');
    this.cargarStorage();
    //console.log(this.usuario);
  }

estaLogeado(){
  return(this.token.length>5)?true:false;
}
cargarStorage(){
  if(localStorage.getItem('token')){
    this.token=localStorage.getItem('token');
    this.usuario=JSON.parse(localStorage.getItem('usuario'))
  }else{
    this.token='';
    this.usuario=null;
  }
}

guardarStorage(id:string,token:string,usuario:Usuario){
          localStorage.setItem('id',id);
          localStorage.setItem('token',token);
          localStorage.setItem('usuario', JSON.stringify(usuario));

          this.usuario=usuario;
          this.token=token;
}

logout(){
  this.usuario=null;
  this.token='';

  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  this.router.navigate(['/pages']);
}


 loginGoogle(token:string){
    let url=URL_SERVICIOS+'/login/google';
    return this.http.post(url,{token}).pipe(map((resp:any)=>{
      this.guardarStorage( resp.id,resp.token,resp.usuario)
      return true;
    }));
  }



  login(usuario: Usuario ,recordar: boolean = false){
  //Función recuerdame
    if(recordar){
      localStorage.setItem('email',usuario.email)
    }else{
      localStorage.removeItem('email');
    }

    let url=URL_SERVICIOS+'/login';
    return this.http.post(url,usuario).pipe(
          map((resp:any)=>{

          this.guardarStorage( resp.id,resp.token,resp.usuario);

          return true;
          }));
  }

  obtenerDatos(){
    let token=localStorage.getItem('token');
    let url=URL_SERVICIOS+'/usuario/obt/?token='+token;

    return this.http.get(url).pipe(map((resp: any) => {
      console.log(resp);
        return resp;
      }));;
  }

  obtenerDatosId(id:any){

    let url=URL_SERVICIOS+'/usuario/ob';

    return this.http.get(url,id).pipe(map((resp: any) => {

      return resp;
    }));
  }
  obtenerDatosUsrName(usr:any){
    //console.log(usr);

    let url=URL_SERVICIOS+'/usuario/usr/'+usr;

    return this.http.get(url).pipe(map((resp: any) => {
    //console.log(resp);
      return resp;
    }));
  }

//CREAR USUARIO
  crearUsuario(usuario:Usuario){
  let url=URL_SERVICIOS+'/usuario';
  return this.http.post(url, usuario).pipe(map((resp: any) => {
    Swal.fire(
      'Usuario Creado!',
      usuario.email,
      'success'
    )
    return resp.usuario;
  }));
  }

// ACTUALIZAR USUARIO
  actualizarUsuario(id:string,usuario:Usuario,token){
    let url = URL_SERVICIOS + '/usuario/'+id+'?token=' + token;
    return this.http.put(url, usuario).pipe(map((resp: any) => {
      this.usuario=resp.usuario
      //console.log(resp.usuario);

      this.guardarStorage( resp.usuario._id,token,this.usuario);
      this.toastr.success('Cambios Guardados!', null);
      setTimeout(()=>{
        location.reload();

      },1000)


      return resp.usuario;
    }));
    }

// CAMBIAR IMAGEN
cambiarImagen(archivo:File,id:string){

  this._subirArchivoService.subirArchivo(archivo, 'usuarios',id,this.token )
  .then((resp:any)=>{

    let temp=JSON.parse(resp)
    let imgTemp=temp.schemaResponse.data.img
//console.log(temp.schemaResponse.data);
this.usuario.img=imgTemp
    //this.usuario.img=resp.usuario.img
    this.guardarStorage(id, this.token, this.usuario);
  this.toastr.success('Cambios Guardados!', null);

  //console.log(resp);
  })
  .catch(resp=>{
    //console.log(resp);
  })

}





}
