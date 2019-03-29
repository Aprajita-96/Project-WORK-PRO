import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { ProjectCardUserDashboardComponent } from "./project-card-user-dashboard/project-card-user-dashboard.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FreelancerdetailsComponent } from "./freelancerdetails/freelancerdetails.component";

const routes: Routes = [
  {
    path: "project",
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
    path: "podashboard",
    component: ProjectCardUserDashboardComponent
  },
  {
    path: "freelancerdetails",
    component: FreelancerdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
