import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../app/services/service.index';
import { Usuario } from '../app/models/usuario.model';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  email:string;
  recuerdame: boolean = false;
  auth2:any;

  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit(): void {

    //init_plugins();
    this.googleInit();
  this.email=localStorage.getItem('email') || '';
  if(this.email.length>1){
    this.recuerdame=true;
    }
  }

  googleInit(){
    gapi.load('auth2', ()=>{

      this.auth2=gapi.auth2.init({
        client_id:'18110607042-hu5hvj1p5p54sm53kd674eaga8ii1l1f.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });
    this.attachSignin(document.getElementById('btnGoogle'));
  });
}

attachSignin(element){
  this.auth2.attachClickHandler(element,{},(googleUser)=>{

    //let profile=googleUser.getBasicProfile();
      let token=googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token)
          .subscribe(()=> window.location.href='#/user/dashboard');


  });
}

ingresar(forma: NgForm){

  if(forma.invalid){
    return;
  }
  let usuario = new Usuario(null, forma.value.email, forma.value.password);

  this._usuarioService.login(usuario, forma.value.recuerdame)
  .subscribe(correcto => this.router.navigate(['/user/dashboard']));

  // this.router.navigate(['/dashboard'])
  }



}
