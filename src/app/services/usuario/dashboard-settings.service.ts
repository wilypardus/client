import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardSettingsService {
  info:any=[

        {icono: 'lnr lnr-home',titulo:'Dashboard', url:'user/dashboard'},
        {icono: 'lnr lnr-user',titulo:'Mi perfil', url:'user/progress'},
        {icono: 'lnr lnr-chart-bars',titulo:'Ventas', url:'user/graficas1'},
        {icono: 'lnr lnr-briefcase',titulo:'Mis productos', url:'user/mis-productos'},
        {icono: 'lnr lnr-envelope',titulo:'Mensajes', url:'user/rxjs'},

  ];


  constructor() { }
}

