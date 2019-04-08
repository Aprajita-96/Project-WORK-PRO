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
  constructor(private freelancerdetails:FreelancerDetailsService,private loginauth:LoginAuthService) { }
  @Input()
  ngOnInit() {
    this.filterOpenBids();
    this.decodeToken=this.loginauth.checkToken();
    this.freelancerdetails.getBidsofFreelancer().subscribe(data=>{
      this.projects1=data;
    });
    console.log(this.projects1);
  }

  
  filterOpenBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "open" && e.freeLanceremail===this.decodeToken.sub) {
        return e;
      }
    });
  }
  filterCloseBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "close" && e.freeLanceremail===this.decodeToken.sub) {
        return e;
      }
    });
  }
  filterWonBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "won" && e.freeLanceremail===this.decodeToken.sub) {
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