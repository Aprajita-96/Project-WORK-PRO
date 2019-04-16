import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import {Router} from '@angular/router';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

public user: any = {};  
constructor(private userService: UserserviceService,private router:Router,private authService: LoginAuthService) {
  this.authService.isLoggedIn();
}  
ngOnInit() {
}
loginUser(user:any){  
    this.userService.loginUser(user).subscribe((response)=>{
    if(response){
      localStorage.setItem('token',JSON.stringify(response.token));
      console.log(response)
      console.log(response.user.role)
      if(response.user.role === 'USER'){
        this.router.navigateByUrl('/userdashboard')
         
      }else{
        this.router.navigateByUrl('/podashboard');
      }
    }
})

}
}
