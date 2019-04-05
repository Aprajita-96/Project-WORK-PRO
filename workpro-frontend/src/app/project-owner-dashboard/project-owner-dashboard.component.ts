import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-owner-dashboard',
  templateUrl: './project-owner-dashboard.component.html',
  styleUrls: ['./project-owner-dashboard.component.scss']
})
export class ProjectOwnerDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
