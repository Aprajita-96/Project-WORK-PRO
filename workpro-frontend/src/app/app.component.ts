import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserserviceService } from './userservice.service';
import {LoginAuthService} from './login-auth.service';
import { Router } from '@angular/router';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "workpro-frontend";
   constructor(private userService:UserserviceService,private loginauthservice:LoginAuthService,private route:Router){
     this.userService=userService;
   }
   
   isLogin:boolean=false;
   decodedToken:any;
   role:any;
   email:any;
   
  ngOnInit() {
    this.decodedToken=this.loginauthservice.checkToken();
      console.log(this.decodedToken);
      if(this.decodedToken){
        this.role=this.decodedToken.role;
        this.email=this.decodedToken.sub;
        this.isLogin=true
        localStorage.setItem("email",this.email);
        localStorage.setItem("role",this.role);
      }      
          
  }

  logout(){
    localStorage.clear();
    this.route.navigate(["/"]);
  }

}
