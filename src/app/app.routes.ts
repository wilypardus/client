import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login.component';
import { RegisterComponent } from '../auth/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';






const appRoutes: Routes=[
 //LO IMPORTAMOS EN PAGES_D_ROUTES
  // {
 //     path: '',
 //     component: PagesComponent,
 //     children:[
 //       { path: 'dashboard', component: DashboardComponent },
 //       { path: 'progress', component: ProgressComponent },
 //       { path: 'graficas1', component: Graficas1Component },
 //       { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
 //     ]
  // },
  { path: '', component: HomeComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES=RouterModule.forRoot(appRoutes, { useHash:true });
