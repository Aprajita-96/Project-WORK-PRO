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
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UserDashboardSearchComponent } from './user-dashboard-search/user-dashboard-search.component';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
import { AuthGuard } from './auth-guard';

=======
import { FreelancerdetailsComponent } from './freelancerdetails/freelancerdetails.component';
import { FreelancerDetailsService} from './freelancer-details.service';
>>>>>>> 17172b5cb63a8f7c8f56b584981ee241d9bc8553

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    ProjectCardUserDashboardComponent,
    UserDashboardSearchComponent,
    SearchComponent,
    FreelancerdetailsComponent,
    ProjectDetailsComponent,
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
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    AuthGuard
=======
    HttpClientModule,FormsModule,
    FreelancerDetailsService
>>>>>>> 17172b5cb63a8f7c8f56b584981ee241d9bc8553
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
