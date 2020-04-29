import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from '../../services/service.index';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styles: [
  ]
})
export class DashboardMenuComponent implements OnInit {

  constructor(
    public _dashboardMenu:DashboardMenuService,
    public _usuarioService:UsuarioService) {


    }

  ngOnInit(): void {
  }

}
