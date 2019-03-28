import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [ 
  {
  path: "project", component: ProjectDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
