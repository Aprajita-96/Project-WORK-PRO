import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FreelancerdetailsComponent } from './freelancerdetails/freelancerdetails.component';

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
    path:"freelancerdetails", component:FreelancerdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
