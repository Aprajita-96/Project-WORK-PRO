import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreelancerDetailsService } from '../freelancer-details.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-bidview',
  templateUrl: './bidview.component.html',
  styleUrls: ['./bidview.component.scss']
})
export class BidviewComponent implements OnInit {

  pid:String;
  poemail:String;
  constructor(private freelancerDetailsService:FreelancerDetailsService,private route:ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
   console.log(this.data)
  }

  savebid(user){
    let bidinfo={
      "projectId":this.data.pid,
      "projectName":this.data.pname,
      "projectOwnerEmail":this.data.poemail,

      freelancerEmailId:localStorage.getItem('email'),
      "proposedCompletionDate":user.duration,
      "bidAmount":+user.amount,
      "projectAwarded":false
    }
    this.freelancerDetailsService.postBids(bidinfo).subscribe(console.log);
    console.log(bidinfo);
  }
}
