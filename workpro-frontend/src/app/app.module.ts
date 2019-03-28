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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    ProjectCardUserDashboardComponent,
    UserDashboardSearchComponent,
    SearchComponent
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
    HttpClientModule,FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
