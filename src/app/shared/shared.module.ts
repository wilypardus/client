import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';


//Paginas
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ItemsListComponent } from './items-list/items-list.component';







@NgModule({
  imports:[
    RouterModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule


  ],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    ItemsListComponent,

  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    ItemsListComponent
  ],
  providers: [],
})
export class SharedModule {}
