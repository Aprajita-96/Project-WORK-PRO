import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FreelancerDetailsService } from '../freelancer-details.service';

@Component({
  selector: 'app-editfreelancer-profile',
  templateUrl: './editfreelancer-profile.component.html',
  styleUrls: ['./editfreelancer-profile.component.scss']
})
export class EditfreelancerProfileComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  addedSkills = [];
  public user: any = {};
  constructor(private _formBuilder: FormBuilder, private freelancerDetailsService: FreelancerDetailsService) { }

  email: String;
  personalDetails;
  address;
  professionalDetails;
  details:any=[];
  userPresent:boolean=false;


  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.freelancerDetailsService.getDetailsOfFreelancers(this.email).subscribe(data=>{
      this.details=data;
      this.addedSkills = this.details.skills 

    });
    if(this.details.freelancerName!==null){
      this.userPresent=true;
    }
    console.log(this.addedSkills)
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
    if(this.details.freelancerEmail===null){
      this.freelancerDetailsService.postFreelancerDetails(user).subscribe(console.log);
    }
    else{
    this.freelancerDetailsService.updateDetailsofFreelancers(user).subscribe(data => {
      console.log(data, "this is  the response from the backend!!")
    })
    }
  }




  addSkill(skill) {
    console.log(skill)

    this.addedSkills.push(skill);

  }

  removeSkill(skill) {
    console.log(skill)
    this.addedSkills = this.addedSkills.filter(e => {
      console.log(e, skill, "this is some va")
      return e !== skill
    })
  }

  addPersonalDetails(value) {
    this.personalDetails = value
  }

  addEditAddress(value) {
    this.address = value;
  }

  addprofessionaldetails(value) {
    this.professionalDetails = this.addedSkills;
  }
}




