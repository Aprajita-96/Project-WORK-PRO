import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project:any;
  constructor() { }

  
  ngOnInit() {
    console.log(this.details);
   
   
  }
  

  details = {
    "_id": "5c9b4cace20beda036fd3df3",
    "name": "Gordon",
    "discription": "Veniam dolor exercitation elit minim proident. Amet ipsum commodo exercitation eu tempor tempor veniam anim aliquip enim sit aliqua ut id. Velit ea ea est qui dolor ad eiusmod reprehenderit eiusmod.",
    "requiredTime": "Sat Nov 17 1990 12:32:52 GMT+0530 (India Standard Time)",
    "Amount": 321,
    "bids": [
      {
        "name": "Delacruz",
        "bidValue": 3899,
        "timeLimit": "Mon Nov 28 1988 18:44:46 GMT+0530 (India Standard Time)"
      },
      {
        "name": "Kellie",
        "bidValue": 3495,
        "timeLimit": "Sat Jul 04 2015 08:55:00 GMT+0530 (India Standard Time)"
      },
      {
        "name": "Mclaughlin",
        "bidValue": 6856,
        "timeLimit": "Mon Oct 12 1998 05:51:45 GMT+0530 (India Standard Time)"
      },
      {
        "name": "Lesa",
        "bidValue": 2985,
        "timeLimit": "Fri Apr 11 1980 01:18:45 GMT+0530 (India Standard Time)"
      },
      {
        "name": "Bentley",
        "bidValue": 2685,
        "timeLimit": "Mon Nov 28 1977 22:59:57 GMT+0530 (India Standard Time)"
      },
      {
        "name": "Catherine",
        "bidValue": 5646,
        "timeLimit": "Tue Feb 09 1999 22:29:52 GMT+0530 (India Standard Time)"
      },
      {
        "name": "Rosella",
        "bidValue": 4531,
        "timeLimit": "Mon Jul 26 2010 14:41:12 GMT+0530 (India Standard Time)"
      },
      {
        "name": "Reynolds",
        "bidValue": 6247,
        "timeLimit": "Wed Aug 06 2008 07:49:01 GMT+0530 (India Standard Time)"
      }
    ]
  }
}
