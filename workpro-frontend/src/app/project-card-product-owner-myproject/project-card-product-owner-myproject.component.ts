import { Component, OnInit, Input } from "@angular/core";
import { MyprojectsComponent } from "../myprojects/myprojects.component";

@Component({
  selector: "app-project-card-product-owner-myproject",
  templateUrl: "./project-card-product-owner-myproject.component.html",
  styleUrls: ["./project-card-product-owner-myproject.component.scss"]
})
export class ProjectCardProductOwnerMyprojectComponent implements OnInit {
  constructor() {}
  @Input() project;
  ngOnInit() {}
}
//  project:
//    [
//       {

//         "projecttitle": "Holt",
//         "projectdescription": "Sint in exercitation commodo consectetur."
//       },
//       {
//         "projecttitle": "Barr",
//         "projectdescription": "Ipsum elit consectetur aliquip fugiat consequat est minim voluptate dolor in."
//       },
//       {
//         "projecttitle": "Alissa",
//         "projectdescription": "In consectetur occaecat elit duis irure est ex aute exercitation ea."
//       },
//       {
//         "projecttitle": "Henson",
//         "projectdescription": "Elit incididunt ut nostrud officia deserunt id."
//       },
//       {
//         "projecttitle": "Bullock",
//         "projectdescription": "Non incididunt ut sit aute qui ullamco qui sint laboris."
//       },
//       {
//         "projecttitle": "Hendricks",
//         "projectdescription": "Voluptate et qui in adipisicing nulla officia officia consequat aliqua excepteur voluptate non quis."
//       },
//       {
//         "projecttitle": "Sharp",
//         "projectdescription": "Consectetur cupidatat in magna irure."
//       }
//     ]
