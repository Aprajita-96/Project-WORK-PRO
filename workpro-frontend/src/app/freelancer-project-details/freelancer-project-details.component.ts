import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-project-details',
  templateUrl: './freelancer-project-details.component.html',
  styleUrls: ['./freelancer-project-details.component.scss']
})
export class FreelancerProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.projectDetails)
  }


  projectDetails=
    {
      "name": "Kirkland",
      "description": "Ipsum tempor occaecat in eiusmod aliquip. Quis eu nisi amet deserunt veniam magna. Esse duis enim reprehenderit minim tempor reprehenderit esse tempor in ipsum.",
      "requiredTime": "Fri Jan 04 2019 16:06:04 GMT+0530 (India Standard Time)",
      "Amount": 6816,
      "location": "Croom",
      "preference": "onsite"
    }
  

}
