import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {  ProjectDetailsComponent } from './project-details/project-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailFormComponent } from './project-detail-form/project-detail-form.component';


const routes: Routes = [
  {
    path: "project", component: ProjectDetailsComponent
  },
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
    path:'projectDetailForm',
    component:ProjectDetailFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
