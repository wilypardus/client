import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  SidebarService, SharedService,UsuarioService,DashboardMenuService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './guards/login.guard';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ SidebarService, SharedService,UsuarioService,LoginGuard,DashboardMenuService]
})
export class ServiceModule { }
