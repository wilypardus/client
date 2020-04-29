import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  SidebarService, SharedService,UsuarioService,DashboardMenuService,DashboardSettingsService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './guards/login.guard';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ SidebarService, SharedService,UsuarioService,LoginGuard,DashboardMenuService,DashboardSettingsService]
})
export class ServiceModule { }
