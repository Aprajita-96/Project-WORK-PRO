import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-usercard-project-owner-dashboard',
  templateUrl: './usercard-project-owner-dashboard.component.html',
  styleUrls: ['./usercard-project-owner-dashboard.component.scss']
})
export class UsercardProjectOwnerDashboardComponent implements OnInit {
  @Input() freelancer;
  constructor() { }

  ngOnInit() {
  }

}
