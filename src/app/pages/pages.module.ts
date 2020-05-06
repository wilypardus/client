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
import { ItemSingleComponent } from './item-single/item-single.component';
import { PipesModule } from '../pipes/pipes.module';
import { AuthorComponent } from './author/author.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ReviewsComponent } from './reviews/reviews.component';









@NgModule({
  declarations: [
    PagesComponent,
    ItemsComponent,
    DesignersComponent,
    ProductosComponent,
    ContactoComponent,
    ItemSingleComponent,
    AuthorComponent,
    BusquedaComponent,
    ReviewsComponent,





  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    BrowserModule,
    CommonModule,
    PipesModule







 ],
  exports: [
    ItemsComponent,
    PagesComponent,
    BusquedaComponent

  ],
  providers: [],
})
export class PagesModule {}
