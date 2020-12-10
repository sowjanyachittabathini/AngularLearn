
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import LoginComponent from './components/login/login.component'
import AppointMentsComponent from  './components/appointments/appointments.component'

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'appointments',
    component: AppointMentsComponent
  }    
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
