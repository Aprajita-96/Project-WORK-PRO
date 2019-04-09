import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  addSkill(skill) {
    console.log("skill is being added", skill )
    let s = {
      name: skill
    }
    this.addedSkills.push(s);
  }

  removeSkill(skill) {
      console.log(skill)
      this.addedSkills = this.addedSkills.filter(e => {
        return e.name !== skill
      })
  }
  freelancers = [
    {
      "name": "Arline Skinner",
      "email": "arlineskinner@pharmex.com",
      "skills": " Android / Java / Mobile App Development",
      "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
    },
    {
      "name": "Cristina Bernard",
      "email": "cristinabernard@pharmex.com",
      "skills": " Android / jQuery / Prototype / Mobile App Development / PhoneGap / Technical Support ",
      "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
    },
    {
      "name": "Sadie Olson",
      "email": "sadieolson@pharmex.com",
      "skills": " Android / Java / Mobile App Development / MySQL / PHP ",
      "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
    },
    {
      "name": "Eileen Harris",
      "email": "eileenharris@pharmex.com",
      "skills": " Android / iPhone / Mobile App Development / Objective C / Swift",
      "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
    },
    {
      "name": "Garza Terrell",
      "email": "garzaterrell@pharmex.com",
      "skills": " Android / Ionic Framework / iOS Development / iPhone node.js ",
      "profilePicUrl": "https://previews.123rf.com/images/pandavector/pandavector1704/pandavector170406117/76645972-man-with-beard-icon-flat-single-avatar-icon-.jpg"
    }
  ]
}

  


