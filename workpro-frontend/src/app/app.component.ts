import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserserviceService } from './userservice.service';
import {LoginAuthService} from './login-auth.service';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "workpro-frontend";
   constructor(private userService:UserserviceService,private loginauthservice:LoginAuthService){
     this.userService=userService;
   }
   
   isLogin:boolean=false;
   
  ngOnInit() {
    if(localStorage.getItem("role")){
      this.isLogin=true
    }      
  }

}
