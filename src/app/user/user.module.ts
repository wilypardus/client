import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';
// import { Graficas1Component } from './graficas1/graficas1.component';
import { UserComponent } from './user.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { SharedModule } from '../shared/shared.module';
import { USER_ROUTES } from './user.routes';
// import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
// import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
// import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';
import { CommonModule } from '@angular/common';







@NgModule({
  declarations: [
    DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    UserComponent,
    // IncrementadorComponent,
    // GraficoDonaComponent,
    // AccountSettingsComponent,
    // PromesasComponent,
    // RxjsComponent,
    DashboardSettingComponent,
    MisProductosComponent,
    DashboardMenuComponent




  ],
  imports: [
    SharedModule,
    USER_ROUTES,
    FormsModule,
    ChartsModule,
    CommonModule,





 ],
  exports: [
    DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    UserComponent,
    DashboardMenuComponent


  ],
  providers: [],
})
export class UserModule {}
