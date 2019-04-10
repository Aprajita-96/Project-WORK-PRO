import { Component, OnInit } from '@angular/core';
import { ProductownerdetailsService } from '../productownerdetails.service';


@Component({
  selector: 'app-project-detail-form',
  templateUrl: './project-detail-form.component.html',
  styleUrls: ['./project-detail-form.component.scss']
})
export class ProjectDetailFormComponent implements OnInit {
  public user: any = {};
  skills = [];
  bid = [];
  addBidToProjects = false;
  constructor(private productownerdetailsService: ProductownerdetailsService) { }
  email: String;


  ngOnInit() {
    this.email = localStorage.getItem("email");
  }
  saveUser(user: any, userForm: any) {
    user.skillsSetList = this.skills;
    console.log(this.skills)
    user.projectName = user.projectName;
    user.freelancerAddress = user.freelancerAddress;
    user.projectCompletionDate = user.projectCompletionDate;
    user.projectPreference = user.projectPreference;
    user.projectLocation = user.projectLocation;

    // console.log(user);
    this.addproject(user);
    let project = {
      projectOwnerEmailId: this.email,
      projectDetailsList: [user]
    }
    console.log(project)

    this.productownerdetailsService.setProjectDetails(project).subscribe(console.log);

  }

  addproject(user) {

  }
  addSkill(skill) {
    // console.log(skill, "slkdjflkjsdlkfjsd")
    this.skills.push(skill)
  }

  addBid(bid) {
    let bidDetails =
    {
      bidLastDate: bid.bidLastDate,
      maximumBudget: bid.maximumBudget,
      minimumBudget: bid.minimumBudget,

    }
    this.addBidToProjects = true;
    this.bid.push(bidDetails)
  }
  deleteSkill(skill) {
    this.skills = this.skills.filter(e => e.skillName !== skill.skillName)
  }

  addfirstDetails(value) {
    console.log(value, "first");
  }

}
