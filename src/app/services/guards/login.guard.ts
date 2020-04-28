import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public _usuariosService:UsuarioService,
    public router:Router){}
  canActivate() {
    if (this._usuariosService.estaLogeado()){
      console.log('Ha pasado el Guard');
      return true;
    }else{
      console.log('Bloquea el guard');
      this.router.navigate(['login']);
      return false;

    }

  console.log('Paso por el login guard');
    return true;
  }

}
