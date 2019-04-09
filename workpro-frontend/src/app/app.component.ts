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
   role:any;
   isLogin:boolean=false;
   decodedToken:any;
   email:any;

  ngOnInit() {
    
    this.decodedToken=this.loginauthservice.checkToken();
    console.log(this.decodedToken);
    if(this.decodedToken){
      this.role=this.decodedToken.role;
      this.isLogin=true;
      this.email=this.decodedToken.sub;
      localStorage.setItem("email",this.email);
      localStorage.setItem("role",this.role);
    }
    
  }

}
