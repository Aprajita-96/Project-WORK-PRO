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
      projectName: "Project1",
      freeLanceremail:"someemail@gmail.com",
      bidAmount: 23323,
      duration: "33",
      status: "close",
      awarded: true
    },
    {
      projectName: "Project2",
      freeLanceremail:"someemail@gmail.com",
      bidAmount: 23323,
      duration: "33",
      status: "open",
      awarded: false
    },
    {
      projectName: "Project3",
      freeLanceremail:"someemail@gmail.com",
      bidAmount: 23323,
      duration: "33",
      status: "close",
      awarded: true
    },
    {
      projectName: "Project4",
      freeLanceremail:"someemail@gmail.com",
      bidAmount: 23323,
      duration: "33",
      status: "open",
      awarded: false
    },
    {
      projectName: "Project5",
      freeLanceremail:"someemail@gmail.com",
      bidAmount: 23323,
      duration: "33",
      status: "open",
      awarded: false
    }
  ];
}