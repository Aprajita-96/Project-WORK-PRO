import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
<<<<<<< HEAD
import {ProjectCardUserDashboardComponent} from './project-card-user-dashboard/project-card-user-dashboard.component';
=======
import {  ProjectDetailsComponent } from './project-details/project-details.component';
>>>>>>> 17172b5cb63a8f7c8f56b584981ee241d9bc8553
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FreelancerdetailsComponent } from './freelancerdetails/freelancerdetails.component';

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
<<<<<<< HEAD
  path:'podashboard' , component:ProjectCardUserDashboardComponent
  } 
=======
    path:"freelancerdetails", component:FreelancerdetailsComponent
  }
>>>>>>> 17172b5cb63a8f7c8f56b584981ee241d9bc8553
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
