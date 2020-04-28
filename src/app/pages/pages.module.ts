import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { PagesComponent } from './pages.component';
import { ItemsComponent } from './items/items.component';
import { DesignersComponent } from './designers/designers.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';






@NgModule({
  declarations: [
    PagesComponent,
    ItemsComponent,
    DesignersComponent,
    ProductosComponent,
    ContactoComponent




  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    BrowserModule,
    CommonModule,
    NgxPaginationModule






 ],
  exports: [
    ItemsComponent,
    PagesComponent

  ],
  providers: [],
})
export class PagesModule {}
