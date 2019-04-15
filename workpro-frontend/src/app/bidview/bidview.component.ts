import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreelancerDetailsService } from '../freelancer-details.service';

@Component({
  selector: 'app-bidview',
  templateUrl: './bidview.component.html',
  styleUrls: ['./bidview.component.scss']
})
export class BidviewComponent implements OnInit {

  pid:String;
  poemail:String;
  constructor(private freelancerDetailsService:FreelancerDetailsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.pid=data.id;
      console.log(this.pid)
    })
  }

  savebid(user){
    let bidinfo={
      freelancerEmailId:localStorage.getItem('email'),
      proposedCompletionDate:user.duration,
      bidAmount:+user.amount,
      projectAwarded:false
    }
    this.freelancerDetailsService.postBids(this.poemail,this.pid,user).subscribe(console.log);
    console.log(bidinfo);
  }
}
