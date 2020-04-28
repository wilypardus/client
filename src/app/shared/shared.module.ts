import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//Paginas
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';





@NgModule({
  imports:[RouterModule,CommonModule],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,

  ],
  providers: [],
})
export class SharedModule {}
