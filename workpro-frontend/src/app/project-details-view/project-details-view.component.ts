import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BidviewComponent } from '../bidview/bidview.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details-view',
  templateUrl: './project-details-view.component.html',
  styleUrls: ['./project-details-view.component.scss']
})
export class ProjectDetailsViewComponent implements OnInit {
  isLoggedIn = false;
  id:String;
  constructor(public dialog: MatDialog,private route:  ActivatedRoute) { }
  
  ngOnInit() {
    if(localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;      
    }
    this.route.params.subscribe(data=>{
      this.id=data.id;
      console.log(this.id);
  });
}

  openDialog(){
    const dialogRef = this.dialog.open(BidviewComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
