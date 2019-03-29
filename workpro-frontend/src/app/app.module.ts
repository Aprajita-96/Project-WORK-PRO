import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserserviceService } from './userservice.service';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProjectCardUserDashboardComponent } from './project-card-user-dashboard/project-card-user-dashboard.component';
import {HttpClientModule} from '@angular/common/http';

import { UserDashboardSearchComponent } from './user-dashboard-search/user-dashboard-search.component';
import { SearchComponent } from './search/search.component';
import { FreelancerdetailsComponent } from './freelancerdetails/freelancerdetails.component';
import { FreelancerDetailsService} from './freelancer-details.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    ProjectCardUserDashboardComponent,
    UserDashboardSearchComponent,
    SearchComponent,
    FreelancerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [
    UserserviceService,
    HttpClientModule,FormsModule,
    FreelancerDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
