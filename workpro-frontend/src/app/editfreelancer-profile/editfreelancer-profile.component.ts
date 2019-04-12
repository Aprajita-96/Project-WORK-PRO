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


  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  saveUser() {

    let user = {
      "freelancerName": this.personalDetails.freelancerName,
      "freelancerEmail": this.personalDetails.email,
      "freelancerAddress": this.address.address,
      "yearsOfExpertise": 1,
      "skills": this.addedSkills
    }

    this.freelancerDetailsService.updateDetailsofFreelancers(user).subscribe(data => {
      console.log(data, "this is  the response from the backend!!")
    })
  }




  addSkill(skill) {
    let s = {
      name: skill
    }
    this.addedSkills.push(skill);

  }

  removeSkill(skill) {
    this.addedSkills = this.addedSkills.filter(e => {
      return e.name !== skill
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




