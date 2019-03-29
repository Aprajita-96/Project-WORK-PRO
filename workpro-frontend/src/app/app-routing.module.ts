import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {ProjectCardUserDashboardComponent} from './project-card-user-dashboard/project-card-user-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"register", component: RegisterComponent
  },
  {
    path:"login" , component: LoginComponent
  },
  {
    path: 'userdashboard', component: UserDashboardComponent
  },
  {
  path:'podashboard' , component:ProjectCardUserDashboardComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
