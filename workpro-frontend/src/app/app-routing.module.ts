import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { ProjectCardUserDashboardComponent } from "./project-card-user-dashboard/project-card-user-dashboard.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FreelancerdetailsComponent } from "./freelancerdetails/freelancerdetails.component";
import { ProjectDetailFormComponent } from './project-detail-form/project-detail-form.component';
import {ProductownerprofileComponent} from "./productownerprofile/productownerprofile.component";

import { ProjectOwnerDashboardComponent } from './project-owner-dashboard/project-owner-dashboard.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
const routes: Routes = [
  {
    path: "projectDetailsComponent",
    component: ProjectDetailsComponent
  },
  
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "userdashboard",
    component: UserDashboardComponent
  },
  {
    path: 'projectDetailFormComponent',
    component: ProjectDetailFormComponent
  },
  {
    path: "freelancerdetails",
    component: FreelancerdetailsComponent
  },
  {
    path: "podashboard",
    component: ProjectCardUserDashboardComponent
  },
  {
    path: "projectOwnerDetails",
    component: ProductownerprofileComponent
  },
  {
    path: "projectownerdashboard", component: ProjectOwnerDashboardComponent
  },
  {
    path: "productownermyprojects", component: MyprojectsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
