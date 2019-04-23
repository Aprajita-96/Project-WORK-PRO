import { Component, OnInit } from '@angular/core';
import { FreelancerDetailsService } from '../freelancer-details.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-freelancerprofile',
  templateUrl: './freelancerprofile.component.html',
  styleUrls: ['./freelancerprofile.component.scss']
})
export class FreelancerprofileComponent implements OnInit {

  constructor(private freelancerdetails:FreelancerDetailsService, private route:  ActivatedRoute) { }

  email:String
  profile:any=[];
  role:String;
  id:String;
  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.id=data.email;
     
    })
    console.log(this.id)
    this.role=localStorage.getItem("role");
    this.email=localStorage.getItem("email");
    if(this.role==='USER'){
    this.freelancerdetails.getDetailsOfFreelancers(this.email).subscribe(data=>{
      console.log(data);
      this.profile=data;
      
    });
  }
  else
  this.freelancerdetails.getDetailsOfFreelancers(this.id).subscribe(data=>{
    console.log(data);
    this.profile=data;
  });

  }

}
