import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

public user: any = {};  constructor(private userService: UserserviceService,private router:Router) {
  // this.authService.isLoggedIn();
}  ngOnInit() {
}
loginUser(user:any){  
//     this.userService.loginUser(user).subscribe((response)=>{
//     if(response){
//       localStorage.setItem('currentUser',JSON.stringify(response));
//       if(response.user.role === 'ADMIN'){
//          this.router.navigate(['/admindashboard']);
//       }else{
//         this.router.navigate(['/userdashboard'])
//       }
//     }
// })
}
}
