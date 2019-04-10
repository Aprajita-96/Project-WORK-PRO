import { Component, OnInit } from '@angular/core';
import { FreelancerDetailsService } from '../freelancer-details.service';

@Component({
  selector: 'app-project-owner-dashboard',
  templateUrl: './project-owner-dashboard.component.html',
  styleUrls: ['./project-owner-dashboard.component.scss']
})
export class ProjectOwnerDashboardComponent implements OnInit {

  constructor(private freelancerService:FreelancerDetailsService ) { }
  freelancers;

  ngOnInit() {
  }
  searchFreelancer(skill) {
    this.freelancerService.getSearchResults(skill).subscribe((data: any) => {
      this.freelancers = data.list;
    })
  }
}
