import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserserviceService } from './userservice.service';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "workpro-frontend";
   constructor(private userService:UserserviceService){
     this.userService=userService;
   }
   role:any;
   isLogin:boolean=false;

  ngOnInit() {
    
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    console.log(decodedToken);
    if(decodedToken){
      this.role=decodedToken.role;
      this.isLogin=true;
    }
    
  }

}
