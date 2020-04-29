import { RouterModule,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService,DashboardMenuService } from '../../services/service.index';
import { MenuService } from '../../services/shared/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  usuarioImg:any;
  usuarioName:any;
  usuarioRole:any;
  mobileCerrado:boolean=true;
  constructor(
    public _usuarioService:UsuarioService,
    public _dashboardMenuService:DashboardMenuService,
    public _MenuService:MenuService,
    public router:RouterModule,
  ) { }

  ngOnInit(): void {

    this.cargarDatos();
  }

  cargarDatos(){
    this._usuarioService.obtenerDatos()
    .subscribe((resp:any)=>{
  //console.log(resp);
      this.usuarioImg=resp.img;
      this.usuarioName=resp.nombre;
      this.usuarioRole=resp.role;
    })
    }

  openMobile(){
  this.mobileCerrado=!this.mobileCerrado;
  }

  logout(){
    this._usuarioService.logout();
  }
  estaLogeado(){
    this._usuarioService.estaLogeado()
  }

}
