import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardMenuService {
  menu:any=[

        {icono: 'lnr lnr-home',titulo:'Dashboard', url:'user/dashboard'},
        {icono: 'lnr lnr-cog',titulo:'Ajustes', url:'user/dashboard-settings'},
        {icono: 'lnr lnr-chart-bars',titulo:'Ventas', url:'user/graficas1'},
        {icono: 'lnr lnr-briefcase',titulo:'Mis productos', url:'user/dashboard-productos'},
        {icono: 'lnr lnr-envelope',titulo:'Mensajes', url:'user/rxjs'},

  ];


  constructor() { }
}

