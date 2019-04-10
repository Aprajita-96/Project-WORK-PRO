import { Component, OnInit, Input } from "@angular/core";
import { ProductownerdetailsService } from '../productownerdetails.service';

@Component({
  selector: "app-myprojects",
  templateUrl: "./myprojects.component.html",
  styleUrls: ["./myprojects.component.scss"]
})
export class MyprojectsComponent implements OnInit {
  projects = [];
  projects1:any;
  email:String=localStorage.getItem("email");
  constructor(private productownerdetailsService: ProductownerdetailsService) { }

  @Input()
  ngOnInit() {
    this.productownerdetailsService.getProjectDetails(this.email).subscribe(data=>{
      this.projects1= data
      console.log(this.projects1)
      this.projects = this.projects1["projectDetailsList"];
    });
    
   }

   filterOpenProjects() {
    this.projects = this.projects1["projectDetailsList"].filter(e => {
      // console.log(e);
      if (e.projectStatus === "open") {
        return e;
      }
    });
  }
  filterCloseProjects() {
    this.projects = this.projects1["projectDetailsList"].filter(e => {
      // console.log(e);
      if (e.projectStatus === "closed") {
        return e;
      }
    });
  }



    // {
    //   "projectOwnerName": "Roopali",
    //   "projectOwnerEmailId": "roopali@gmail.com",
    //   "projectDetails": [{
    //     "projectName": "ProjectName1",
    //     "projectstatus": "Open",
    //     "projectAwarded": false,
    //     "projectCompletionDate": "some Date",
    //     "projectPreference": "onsite",
    //     "projcetLocation": "Mumbai",
    //     "projectDescription": "this is description",
    //     "bidSpecProvidedByProjectOwner": `{
    //       "maximumBudget": 093182093,
    //       "minimumBudget": 09821380,
    //       "bidLastDate": "this is Date"
    //     }`,
    //     "skills": [
    //       {
    //         "skillName": "Angular"
    //       },
    //       {
    //         "skillName": "Java"
    //       }
    //     ]
    //   },
    //   {
    //     "projectName": "ProjectName2",
    //     "projectstatus": "Close",
    //     "projectAwarded": false,
    //     "projectCompletionDate": "some Date",
    //     "projectPreference": "",
    //     "projcetLocation": "Mumbai",
    //     "projectDescription": "this is description",
    //     "bidSpecProvidedByProjectOwner": `{
    //       "maximumBudget": 093182093,
    //       "minimumBudget": 09821380,
    //       "bidLastDate": "this is Date"
    //     }`,
    //     "skills": [
    //       {
    //         "skillName": "Angular"
    //       },
    //       {
    //         "skillName": "Java"
    //       }
    //     ]
    //   },
    //   {
    //     "projectName": "ProjectName3",
    //     "projectstatus": "Open",
    //     "projectAwarded": false,
    //     "projectCompletionDate": "some Date",
    //     "projectPreference": "",
    //     "projcetLocation": "Mumbai",
    //     "projectDescription": "this is description",
    //     "bidSpecProvidedByProjectOwner": `{
    //       "maximumBudget": 093182093,
    //       "minimumBudget": 09821380,
    //       "bidLastDate": "this is Date"
    //     }`,
    //     "skills": [
    //       {
    //         "skillName": "Angular"
    //       },
    //       {
    //         "skillName": "Java"
    //       }
    //     ]
    //   }
    // ]
    // };
}
