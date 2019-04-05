import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-myprojects",
  templateUrl: "./myprojects.component.html",
  styleUrls: ["./myprojects.component.scss"]
})
export class MyprojectsComponent implements OnInit {
  constructor() { }

  @Input()
  ngOnInit() {
    // this.filterOpenProjects();
   }

   filterOpenProjects() {
    this.projects = this.projects1["projectDetails"].filter(e => {
      // console.log(e);
      if (e.projectstatus === "Open") {
        return e;
      }
    });
  }
  filterCloseProjects() {
    this.projects = this.projects1["projectDetails"].filter(e => {
      // console.log(e);
      if (e.projectstatus === "Close") {
        return e;
      }
    });
  }


  projects = [];
  projects1:any =
    {
      "projectOwnerName": "Roopali",
      "projectOwnerEmailId": "roopali@gmail.com",
      "projectDetails": [{
        "projectName": "ProjectName1",
        "projectstatus": "Open",
        "projectAwarded": false,
        "projectCompletionDate": "some Date",
        "projectPreference": "onsite",
        "projcetLocation": "Mumbai",
        "projectDescription": "this is description",
        "bidSpecProvidedByProjectOwner": `{
          "maximumBudget": 093182093,
          "minimumBudget": 09821380,
          "bidLastDate": "this is Date"
        }`,
        "skills": [
          {
            "skillName": "Angular"
          },
          {
            "skillName": "Java"
          }
        ]
      },
      {
        "projectName": "ProjectName2",
        "projectstatus": "Close",
        "projectAwarded": false,
        "projectCompletionDate": "some Date",
        "projectPreference": "",
        "projcetLocation": "Mumbai",
        "projectDescription": "this is description",
        "bidSpecProvidedByProjectOwner": `{
          "maximumBudget": 093182093,
          "minimumBudget": 09821380,
          "bidLastDate": "this is Date"
        }`,
        "skills": [
          {
            "skillName": "Angular"
          },
          {
            "skillName": "Java"
          }
        ]
      },
      {
        "projectName": "ProjectName3",
        "projectstatus": "Open",
        "projectAwarded": false,
        "projectCompletionDate": "some Date",
        "projectPreference": "",
        "projcetLocation": "Mumbai",
        "projectDescription": "this is description",
        "bidSpecProvidedByProjectOwner": `{
          "maximumBudget": 093182093,
          "minimumBudget": 09821380,
          "bidLastDate": "this is Date"
        }`,
        "skills": [
          {
            "skillName": "Angular"
          },
          {
            "skillName": "Java"
          }
        ]
      }
    ]
    };
}
