import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BidviewComponent } from '../bidview/bidview.component';

@Component({
  selector: 'app-project-details-view',
  templateUrl: './project-details-view.component.html',
  styleUrls: ['./project-details-view.component.scss']
})
export class ProjectDetailsViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  isLoggedIn = false;
  ngOnInit() {
    if(localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(BidviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
