import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductownerdetailsService } from '../productownerdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-project-owner-profile',
  templateUrl: './edit-project-owner-profile.component.html',
  styleUrls: ['./edit-project-owner-profile.component.scss']
})
export class EditProjectOwnerProfileComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public user: any = {};
  constructor(private _formBuilder: FormBuilder , private productownerdetailservice: ProductownerdetailsService,private route:Router) { }
  email: String;
  personalDetails;
  address;
  location;


  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  saveUser(value,user) {
    this.address = value;
    this.location=value;

    
      user.name= this.personalDetails.name,
      user.email= this.personalDetails.email,
      user.address= this.address.address,
      user.location=this.location.location,
      user.number= this.personalDetails.number
    

    console.log(user);
    this.productownerdetailservice.postDetailsOfProjectOwner(user).subscribe(data => {
      console.log(data, "this is  the response from the backend!!")
    })
    this.route.navigate(['/poprofile']);
  }
  addPersonalDetails(value) {
    this.personalDetails = value
  }
}


//   addSkill(skill) {
//     console.log("skill is being added", skill )
//     let s = {
//       name: skill
//     }
//     this.addedSkills.push(s);
//   }

//   removeSkill(skill) {
//       console.log(skill)
//       this.addedSkills = this.addedSkills.filter(e => {
//         return e.name !== skill
//       })
//   }
//   freelancers = [
//     {
//       "name": "Arline Skinner",
//       "email": "arlineskinner@pharmex.com",
//       "skills": " Android / Java / Mobile App Development",
//       "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
//     },
//     {
//       "name": "Cristina Bernard",
//       "email": "cristinabernard@pharmex.com",
//       "skills": " Android / jQuery / Prototype / Mobile App Development / PhoneGap / Technical Support ",
//       "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
//     },
//     {
//       "name": "Sadie Olson",
//       "email": "sadieolson@pharmex.com",
//       "skills": " Android / Java / Mobile App Development / MySQL / PHP ",
//       "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
//     },
//     {
//       "name": "Eileen Harris",
//       "email": "eileenharris@pharmex.com",
//       "skills": " Android / iPhone / Mobile App Development / Objective C / Swift",
//       "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
//     },
//     {
//       "name": "Garza Terrell",
//       "email": "garzaterrell@pharmex.com",
//       "skills": " Android / Ionic Framework / iOS Development / iPhone node.js ",
//       "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
//     }
//   ]
// }


