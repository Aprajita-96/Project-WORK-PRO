import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { ProjectCardUserDashboardComponent } from "./project-card-user-dashboard/project-card-user-dashboard.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FreelancerdetailsComponent } from "./freelancerdetails/freelancerdetails.component";
import { ProjectDetailFormComponent } from './project-detail-form/project-detail-form.component';
import { MybidsComponent } from './mybids/mybids.component';

import { FreelancerProjectDetailsComponent } from './freelancer-project-details/freelancer-project-details.component';
import { ProductownerprofileComponent } from "./productownerprofile/productownerprofile.component";

import { ProjectOwnerDashboardComponent } from './project-owner-dashboard/project-owner-dashboard.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import{HomeComponent} from'./home/home.component';
<<<<<<< HEAD
import {EditfreelancerProfileComponent} from './editfreelancer-profile/editfreelancer-profile.component';
const routes: Routes = [
  {
    path:"editfreelancerprofile",
    component: EditfreelancerProfileComponent
=======
import{ FreelancerprofileComponent} from'./freelancerprofile/freelancerprofile.component';
const routes: Routes = [
  {
    path:"freelanceprofile",
    component: FreelancerprofileComponent

>>>>>>> bfd561fdb6f8c5671164c9192e8ae581489ef719
  },
  {
    path:"home",
    component: HomeComponent

  },
  {
    path: "projectDetailsComponent",
    component: ProjectDetailsComponent
  },

  {
    path: "freelancerprojectdetails",
    component: FreelancerProjectDetailsComponent
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
    path: "mybids",
    component: MybidsComponent
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
