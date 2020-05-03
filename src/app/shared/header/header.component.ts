import { RouterModule,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService,DashboardMenuService } from '../../services/service.index';
import { MenuService } from '../../services/shared/menu.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  usuario:Usuario;
  // usuarioImg:any;
  // usuarioName:any;
  // usuarioRole:any;
  mobileCerrado:boolean=true;
  constructor(
    public _usuarioService:UsuarioService,
    public _dashboardMenuService:DashboardMenuService,
    public _MenuService:MenuService,
    public router:Router,
  ) {

    this.usuario=this._usuarioService.usuario;
  }

  ngOnInit(): void {
    this.usuario=this._usuarioService.usuario;


  }
  ngOnChanges(): void {
    this.usuario=this._usuarioService.usuario;


  }

  // cargarDatos(){
  //   this._usuarioService.obtenerDatos()
  //   .subscribe((resp:any)=>{
  // //console.error(resp);
  //     this.usuarioImg=resp.usuario.img;
  //     this.usuarioName=resp.usuario.nombre;
  //     this.usuarioRole=resp.usuario.role;
  //   })
  //   }

  openMobile(){
  this.mobileCerrado=!this.mobileCerrado;
  }

  logout(){
    this._usuarioService.logout();
  }
  estaLogeado(){
    this._usuarioService.estaLogeado()
  }

buscar(termino:string){
  this.router.navigate(['/pages/search',termino])
}

}
