import { Component, OnInit } from '@angular/core';
import { ProductownerdetailsService } from '../productownerdetails.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-project-detail-form',
  templateUrl: './project-detail-form.component.html',
  styleUrls: ['./project-detail-form.component.scss']
})
export class ProjectDetailFormComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public user: any = {};
  skills = [];
  bid = [];
  addBidToProjects = false;
  constructor(private _formBuilder: FormBuilder,private productownerdetailsService: ProductownerdetailsService) { }
  email: String;


  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  saveUser(user: any, userForm: any) {
    user.skillsSetList = this.skills;
    console.log(this.skills)
    user.projectName = user.projectName;
    user.projectStatus = "open";
    user.allBidsOfFreelancers=[];
    user.projectDescription = user.projectDescription;
    user.projectCompletionDate = user.projectCompletionDate;
    user.projectPreference = user.projectPreference;
    user.projectLocation = user.projectLocation;
    user.bidSpecsProvidedByProjectOwners=this.bid;

    // console.log(user);
    // this.addproject(user);
    let project = {
      projectOwnerEmailId: this.email,
      projectDetailsList: [user]
    }
    console.log(project)

    this.productownerdetailsService.setProjectDetails(project).subscribe(console.log);

  }

  // addproject(user) {

  // }
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

  removeSkill(skill) {
    this.skills = this.skills.filter(e => {
      return e.name !== skill
    })
  }
}
