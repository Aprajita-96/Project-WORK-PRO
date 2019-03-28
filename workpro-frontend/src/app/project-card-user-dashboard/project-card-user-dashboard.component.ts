import { Component, OnInit, Input  } from '@angular/core';
import { FreelancerserviceService } from '../freelancerservice.service';
@Component({
  selector: 'app-project-card-user-dashboard',
  templateUrl: './project-card-user-dashboard.component.html',
  styleUrls: ['./project-card-user-dashboard.component.scss']
})
export class ProjectCardUserDashboardComponent implements OnInit {

  @Input() project;
  
  constructor(private freelancerserviceService: FreelancerserviceService) { }

  ngOnInit() {
      
  }
  value(data)
  {
    console.log(data)
    this.freelancerserviceService.getProjects().subscribe(console.log)
  }
}
