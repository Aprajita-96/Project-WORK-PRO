import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FreelancerDetailsService } from '../freelancer-details.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-editfreelancer-profile',
 templateUrl: './editfreelancer-profile.component.html',
 styleUrls: ['./editfreelancer-profile.component.scss']
})
export class EditfreelancerProfileComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  addedSkills: any;
  public user: any = {};
  email: String;
  personalDetails: any = [];
  address;
  professionalDetails;
  details: any = [];
  userPresent: boolean = false;

  constructor(private _formBuilder: FormBuilder, private freelancerDetailsService: FreelancerDetailsService,private route:Router) { }


  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.freelancerDetailsService.getDetailsOfFreelancers(this.email).subscribe(data => {
      this.details = data;
      this.addedSkills = this.details.skills

      if (this.details.freelancerName !== null) {
        this.userPresent = true;
      }
    });

    // console.log(this.addedSkills)
  }
  saveUser() {

    let user = {
      "freelancerName": this.personalDetails.Name,
      "freelancerEmail": this.personalDetails.email,
      "freelancerAddress": this.address.address,
      "yearsOfExpertise": 1,
      "skills": this.addedSkills
    }
    console.log(user)

    this.freelancerDetailsService.getDetailsOfFreelancers(this.email).subscribe(data => {
      this.details = data;

      console.log(this.details.freelancerEmail, "what is this ????")
      this.freelancerDetailsService.postFreelancerDetails(user).subscribe(data => {
        this.route.navigate(['freelancerprofile']);
      });     
    }, (err) => {
      console.log("this is comming here !!!!! look carefully ")
    });
  }


  addSkill(skill) {
    this.addedSkills = this.addedSkills || [];
    console.log(skill)
    this.addedSkills.push(skill)
    console.log(this.addedSkills)


  }

  removeSkill(skill) {
    console.log(skill)
    this.addedSkills = this.addedSkills.filter(e => {
      console.log(e, skill, "this is some va")
      return e !== skill
    })
  }

  addPersonalDetails(value) {
    console.log(value)
    this.personalDetails = value
  }

  addEditAddress(value) {
    console.log(value)
    this.address = value;
  }

  addprofessionaldetails(value) {
    console.log(value)
    this.professionalDetails = this.addedSkills;
  }
}




