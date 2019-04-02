import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.scss']
})
export class MybidsComponent implements OnInit {

  constructor() { }
  @Input()
  ngOnInit() {
    this.filterOpenBids();
  }
  filterOpenBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "open") {
        return e;
      }
    });
  }
  filterCloseBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "close") {
        return e;
      }
    });
  }
  filterWonBids() {
    this.projects = this.projects1.filter(e => {
      if (e.status === "won") {
        return e;
      }
    });
  }
  projects=[];
  projects1 = [
    {
      projecttitle: "Holt",
      projectdescription: "Sint in exercitation commodo consectetur.",
      status: "open"
    },
    {
      projecttitle: "Barr",
      projectdescription:
        "Ipsum elit consectetur aliquip fugiat consequat est minim voluptate dolor in.",
      status: "open"
    },
    {
      projecttitle: "Alissa",
      projectdescription:
        "In consectetur occaecat elit duis irure est ex aute exercitation ea.",
      status: "open"
    },
    {
      projecttitle: "Henson",
      projectdescription: "Elit incididunt ut nostrud officia deserunt id.",
      status: "open"
    },
    {
      projecttitle: "Bullock",
      projectdescription:
        "Non incididunt ut sit aute qui ullamco qui sint laboris.",
      status: "close"
    },
    {
      projecttitle: "Hendricks1",
      projectdescription:
        "Voluptate et qui in adipisicing nulla officia officia consequat aliqua excepteur voluptate non quis.",
      status: "won"
    },
    {
      projecttitle: "Hendricks2",
      projectdescription:
        "Voluptate et qui in adipisicing nulla officia officia consequat aliqua excepteur voluptate non quis.",
      status: "won"
    },
    {
      projecttitle: "Hendricks",
      projectdescription:
        "Voluptate et qui in adipisicing nulla officia officia consequat aliqua excepteur voluptate non quis.",
      status: "close"
    },
    {
      projecttitle: "Sharp",
      projectdescription: "Consectetur cupidatat in magna irure.",
      status: "close"
    }
  ];
}