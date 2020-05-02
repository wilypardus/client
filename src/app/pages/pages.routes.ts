
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { DesignersComponent } from './designers/designers.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ItemSingleComponent } from './item-single/item-single.component';

const pagesRoutes: Routes = [
  {path: 'pages',
  component: PagesComponent,
  children:[

    { path: 'items', component: ItemsComponent,data:{titulo:'Items'} },
    { path: 'single/:itemId', component: ItemSingleComponent},
    { path: 'products', component: ProductosComponent,data:{titulo:'Productos'} },
    { path: 'designers', component: DesignersComponent,data:{titulo:'Diseñadores'} },
    { path: 'contacto', component: ContactoComponent,data:{titulo:'Contacto'} },


      // { path: '', pathMatch: 'full', redirectTo: '/items' },
  ]
}
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);
