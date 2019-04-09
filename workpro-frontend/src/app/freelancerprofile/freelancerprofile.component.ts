import { Component, OnInit } from '@angular/core';
import { FreelancerDetailsService } from '../freelancer-details.service';

@Component({
  selector: 'app-freelancerprofile',
  templateUrl: './freelancerprofile.component.html',
  styleUrls: ['./freelancerprofile.component.scss']
})
export class FreelancerprofileComponent implements OnInit {

  constructor(private freelancerdetails:FreelancerDetailsService) { }

  email:String
  profile:any=[];
  role:String;
  ngOnInit() {
    this.role=localStorage.getItem("role");
    this.email=localStorage.getItem("email");
    this.freelancerdetails.getDetailsOfFreelancers(this.email).subscribe(data=>{
      this.profile=data;
      console.log(data);
    });
  }

}
