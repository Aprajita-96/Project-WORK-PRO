import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-myprojects",
  templateUrl: "./myprojects.component.html",
  styleUrls: ["./myprojects.component.scss"]
})
export class MyprojectsComponent implements OnInit {
  constructor() { }

  @Input()
  ngOnInit() { }

  filterOpenProjects() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "open") {
        return e;
      }
    });
  }

  filterCloseProjects() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "close") {
        return e;
      }
    });
  }
  projects = [];
  projects1 =
    {
      projectOwnerName: "Roopali",
      projectOwnerEmailId: "roopali@gmail.com",
      projectDetails: [{
        projectName: "ProjectName",
        projectstatus: "Open",
        projectAwarded: false,
        projectCompletionDate: "some Date",
        projectPreference: "",
        projcetLocation: "Mumbai",
        projectDescription: "this is description",
        bidSpecProvidedByProjectOwner: {
          maximumBudget: 093182093,
          minimumBudget: 09821380,
          bidLastDate: "this is Date"
        },
        skills: [
          {
            skillName: "Angular"
          },
          {
            skillName: "Java"
          }
        ]
      },
      {
        projectName: "ProjectName",
        projectstatus: "Open",
        projectAwarded: false,
        projectCompletionDate: "some Date",
        projectPreference: "",
        projcetLocation: "Mumbai",
        projectDescription: "this is description",
        bidSpecProvidedByProjectOwner: {
          maximumBudget: 093182093,
          minimumBudget: 09821380,
          bidLastDate: "this is Date"
        },
        skills: [
          {
            skillName: "Angular"
          },
          {
            skillName: "Java"
          }
        ]
      },
      {
        projectName: "ProjectName",
        projectstatus: "Open",
        projectAwarded: false,
        projectCompletionDate: "some Date",
        projectPreference: "",
        projcetLocation: "Mumbai",
        projectDescription: "this is description",
        bidSpecProvidedByProjectOwner: {
          maximumBudget: 093182093,
          minimumBudget: 09821380,
          bidLastDate: "this is Date"
        },
        skills: [
          {
            skillName: "Angular"
          },
          {
            skillName: "Java"
          }
        ]
      }
    ]
    }
}
