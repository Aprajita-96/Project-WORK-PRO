import { Component, OnInit } from '@angular/core';
import { FreelancerserviceService } from "../freelancerservice.service";
import { ProductownerdetailsService } from '../productownerdetails.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private projectService: ProductownerdetailsService ) { }
  projects;

   ngOnInit() {
}
searchProject(skill) {
  this.projectService.getResults(skill).subscribe((data: any) => {
    this.projects = data.list;
  });
}
}


  // projects = [
  //   {
  //     "name": "Phillips",
  //     "id": 0,
  //     "discription": "Exercitation dolore excepteur eu ea Lorem anim ullamco aliquip Lorem velit est laboris.",
  //     "status": false
  //   },
  //   {
  //     "name": "Mckay",
  //     "id": 10,
  //     "discription": "Eiusmod elit fugiat fugiat Lorem incididunt ex duis enim.",
  //     "status": true
  //   },
  //   {
  //     "name": "Alisa",
  //     "id": 20,
  //     "discription": "Deserunt Lorem eiusmod magna officia velit nisi eiusmod irure culpa in quis duis est.",
  //     "status": false
  //   },
  //   {
  //     "name": "Maryann",
  //     "id": 30,
  //     "discription": "Magna voluptate exercitation culpa sint non aute ipsum pariatur est dolore nulla laboris fugiat.",
  //     "status": false
  //   },
  //   {
  //     "name": "Lacy",
  //     "id": 40,
  //     "discription": "Occaecat aliquip non quis ex aute aliquip eiusmod laboris eu non dolore.",
  //     "status": false
  //   }
  // ]

