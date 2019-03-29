import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailFormComponent } from './project-detail-form/project-detail-form.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProjectDetailsService} from './project-details.service';
const appRoutes:Routes=[
  { path:'projectDetailForm',component:ProjectDetailFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ProjectDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
