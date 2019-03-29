import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectOwnerDashboardComponent} from './project-owner-dashboard/project-owner-dashboard.component';


const routes: Routes = [
  {path: 'project-owner-dashboard', component: ProjectOwnerDashboardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
