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
import { AuthGuard1Guard } from './auth-guard1.guard';
import { Authguard2Guard } from './authguard2.guard';
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
    component: EditProjectOwnerProfileComponent,
    canActivate: [AuthGuard1Guard]
  },
  {
    path: "freelancerprofile",
    component: FreelancerprofileComponent,
    canActivate:[AuthGuard,Authguard2Guard]
  },
  
    {
      path: "freelancerprofile/:email",
      component: FreelancerprofileComponent,
      canActivate:[AuthGuard1Guard]
    },
  
  {
    path: "editfreelancerprofile",
    component: EditfreelancerProfileComponent,
    canActivate:[AuthGuard,Authguard2Guard]
    
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "projectDetailsComponent/:id/:email",
    component: ProjectDetailsComponent,
  
  },

  {
    path: "freelancerprojectdetails",
    component: FreelancerProjectDetailsComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
    // canActivate:[AuthGuard1Guard,Authguard2Guard]

  },
  {
    path: "login",
    component: LoginComponent,
    // canActivate:[AuthGuard]
   
  },
  {
    path: "userdashboard",
    component: UserDashboardComponent,
    canActivate:[AuthGuard,Authguard2Guard]
  },
  {
    path: 'projectDetailFormComponent',
    component: ProjectDetailFormComponent
  },
  {
    path: "freelancerdetails",
    component: FreelancerdetailsComponent,
    canActivate:[AuthGuard,Authguard2Guard]
  },
  {
    path: "podashboard",
    component: ProjectOwnerDashboardComponent,
    canActivate:[AuthGuard,AuthGuard1Guard]

  },
  {
    path: "mybids",
    component: MybidsComponent,
    canActivate:[Authguard2Guard]
  },
  // {
  //   path: "projectOwnerDetails",
  //   component: ProductownerprofileComponent
  // },
  // {
  //   path: "projectownerdashboard",
  //   component: ProjectOwnerDashboardComponent,
   
  // },
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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
