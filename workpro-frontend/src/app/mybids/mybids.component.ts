import { Component, OnInit,Input } from '@angular/core';
import { FreelancerDetailsService } from '../freelancer-details.service';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.scss']
})
export class MybidsComponent implements OnInit {
  decodeToken:any;
  projects1:any=[];
  projects=[];
  email:String;
  constructor(private freelancerdetails:FreelancerDetailsService,private loginauth:LoginAuthService) { }
  @Input()
  ngOnInit() {
    // this.filterOpenBids();
   this.email=localStorage.getItem("email");
    this.freelancerdetails.getBidsofFreelancer(this.email).subscribe(data=>{
      this.projects1=data;
      console.log(this.projects1);
      this.projects=this.projects1;
    });
    
  }

  
  filterOpenBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "open" ) {
        return e;
      }
    });
  }
  filterCloseBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "close" ) {
        return e;
      }
    });
  }
  filterWonBids() {
    this.projects = this.projects1.filter(e => {
      if (e.awarded === "true" ) {
        return e;
      }
    });
  }
 
  // projects1 = [
  //   {
  //     projectName: "Project1",
  //     freeLanceremail:"someemail@gmail.com",
  //     bidAmount: 23323,
  //     duration: "33",
  //     status: "close",
  //     awarded: true
  //   },
  //   {
  //     projectName: "Project2",
  //     freeLanceremail:"someemail@gmail.com",
  //     bidAmount: 23323,
  //     duration: "33",
  //     status: "open",
  //     awarded: false
  //   },
  //   {
  //     projectName: "Project3",
  //     freeLanceremail:"someemail@gmail.com",
  //     bidAmount: 23323,
  //     duration: "33",
  //     status: "close",
  //     awarded: true
  //   },
  //   {
  //     projectName: "Project4",
  //     freeLanceremail:"someemail@gmail.com",
  //     bidAmount: 23323,
  //     duration: "33",
  //     status: "open",
  //     awarded: false
  //   },
  //   {
  //     projectName: "Project5",
  //     freeLanceremail:"someemail@gmail.com",
  //     bidAmount: 23323,
  //     duration: "33",
  //     status: "open",
  //     awarded: false
  //   },
  //   {
  //     projectName: "Project6",
  //     freeLanceremail:"someemail1@gmail.com",
  //     bidAmount: 23323,
  //     duration: "33",
  //     status: "open",
  //     awarded: false
  //   }
  // ];
}