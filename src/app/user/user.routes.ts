import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';
// import { Graficas1Component } from './graficas1/graficas1.component';
// import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/guards/login.guard';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';
import { CrearItemComponent } from './crear-item/crear-item.component';
import { ActualizarItemComponent } from './actualizar-item/actualizar-item.component';



const pagesDRoutes: Routes = [
  {path: 'user',
  component: UserComponent,canActivate:[LoginGuard],
  children:[
      { path: 'dashboard', component: DashboardComponent,data:{titulo:'Dashboard'} },
      { path: 'dashboard-settings', component: DashboardSettingComponent,data:{titulo:'Ajustes'} },
      { path: 'dashboard-productos', component: MisProductosComponent,data:{titulo:'Mis Productos'} },
      { path: 'crear-item', component: CrearItemComponent,data:{titulo:'Nuevo item'} },
      { path: 'actualizar-item', component: ActualizarItemComponent,data:{titulo:'Nuevo item'} },

      // { path: 'progress', component: ProgressComponent,data:{titulo:'Progress'} },
      // { path: 'graficas1', component: Graficas1Component,data:{titulo:'Gráficas'} },
      // { path: 'promesas', component: PromesasComponent,data:{titulo:'Promesas'} },
      // { path: 'rxjs', component: RxjsComponent,data:{titulo:'RxJs'} },
      // { path: 'account-setting', component: AccountSettingsComponent,data:{titulo:'Ajustes del tema'} },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  ]
}
];

export const USER_ROUTES=RouterModule.forChild(pagesDRoutes);
