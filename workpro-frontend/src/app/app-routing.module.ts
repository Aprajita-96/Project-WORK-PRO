import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
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
import { HomeComponent } from './home/home.component';
import { EditfreelancerProfileComponent } from './editfreelancer-profile/editfreelancer-profile.component';
import { FreelancerprofileComponent } from './freelancerprofile/freelancerprofile.component';
import { EditProjectOwnerProfileComponent } from './edit-project-owner-profile/edit-project-owner-profile.component';
import { ProjectOwnerProfileComponent } from './project-owner-profile/project-owner-profile.component';
import { ProjectDetailsViewComponent } from './project-details-view/project-details-view.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { AuthGuard } from './auth-guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard1Guard } from './auth-guard1.guard';
const routes: Routes = [

  {
    path: "search/:id",
    component: SearchComponentComponent
  },
  {
    path: "detailsview/:id/:email",
    component: ProjectDetailsViewComponent
  },
  {
    path: "detailsview",
    component: ProjectDetailsViewComponent
  },
  {
    path: "poprofile",
    component: ProjectOwnerProfileComponent,
    canActivate: [AuthGuard1Guard,AuthGuard]
  },
  {
    path: "editpoprofile",
    component: EditProjectOwnerProfileComponent
  },
  {
    path: "freelancerprofile",
    component: FreelancerprofileComponent,
  },
  {
    path: "editfreelancerprofile",
    component: EditfreelancerProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "projectDetailsComponent/:id/:email",
    component: ProjectDetailsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "freelancerprojectdetails",
    component: FreelancerProjectDetailsComponent,
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "userdashboard",
    component: UserDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'projectDetailFormComponent',
    component: ProjectDetailFormComponent
  },
  {
    path: "freelancerdetails",
    component: FreelancerdetailsComponent
  },
  // {
  //   path: "podashboard",
  //   component: ProjectOwnerDashboardComponent,
  // },
  {
    path: "mybids",
    component: MybidsComponent
  },
  {
    path: "projectOwnerDetails",
    component: ProductownerprofileComponent,
  },
  {
    path: "projectownerdashboard",
    component: ProjectOwnerDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "productownermyprojects",
    component: MyprojectsComponent,
  },
  {
    path: "freelancerprofile/:id",
    component: FreelancerprofileComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
