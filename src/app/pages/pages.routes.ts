import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { DesignersComponent } from './designers/designers.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

const pagesRoutes: Routes = [
  {path: 'pages',
  component: PagesComponent,
  children:[

    { path: 'items', component: ItemsComponent,data:{titulo:'Items'} },
    { path: 'products', component: ProductosComponent,data:{titulo:'Productos'} },
    { path: 'designers', component: DesignersComponent,data:{titulo:'Diseñadores'} },
    { path: 'contacto', component: ContactoComponent,data:{titulo:'Contacto'} },


      // { path: '', pathMatch: 'full', redirectTo: '/items' },
  ]
}
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);
