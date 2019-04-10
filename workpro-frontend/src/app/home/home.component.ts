import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ViewProfileDailogComponent } from '../view-profile-dailog/view-profile-dailog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ViewProfileDailogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log("this is happening ??")
  }

  freelancers = [
    {
      "name": "Sadie Olson",
      "email": "sadieolson@pharmex.com",
      "skills": " Android / Java / Mobile App Development / MySQL / PHP ",
      "profilePicUrl": "../assets/images/dummy-user.png"
    },
    
    {
      "name": "Eileen Harris",
      "email": "eileenharris@pharmex.com",
      "skills": " Android / iPhone / Mobile App Development / Objective C / Swift",
      "profilePicUrl": "../assets/images/dummy-user.png"
    },
    {
      "name": "Arline Skinner",
      "email": "arlineskinner@pharmex.com",
      "skills": " Android / Java / Mobile App Development",
      "profilePicUrl": "../assets/images/dummy-user.png"
    },
    {
      "name": "Garza Terrell",
      "email": "garzaterrell@pharmex.com",
      "skills": " Android / Ionic Framework / iOS Development / iPhone node.js ",
      "profilePicUrl": "../assets/images/dummy-user.png"
    }
  ]
projects = [
  {
    "name": "RPG Game",
    "id": 0,
    "description": "Have to create some buttons for the description given ",
    "Skills": "Java / SpringBoot"
  },
  {
    "name": "MultiUser Jade Framework",
    "id": 1,
    "description": "Developing a multi-agent platform to test already existed method.",
    "Skills": "HTML / CSS / JQuery"
  },
  {
    "name": "windows server 2012 R2",
    "id": 2,
    "description": "Goal is simple, I need only to configure windows server 2012 R2 to support test authentication using [login to view URL].",
    "Skills": "Android / jQuery / Prototype / Mobile App Development"
  },
  {
    "name": "Telecash Payment gateway",
    "id": 3,
    "description": "I need to develop a small java based web application which will work between telecash payment gateway and .net website. Please bid only if you are experienced/serious freelancer.",
    "Skills": "Prototype / Mobile App Development"
  }
]
}
