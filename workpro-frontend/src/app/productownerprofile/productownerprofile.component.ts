import { Component, OnInit } from '@angular/core';
import { FreelancerDetailsService} from '../freelancer-details.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-productownerprofile',
  templateUrl: './productownerprofile.component.html',
  styleUrls: ['./productownerprofile.component.scss']
})
export class ProductownerprofileComponent implements OnInit {
  productowner:any={};
  constructor(private po:FreelancerDetailsService, private router:Router) { }

  ngOnInit() {
  }
  save(productowner){
    console.log(productowner);
    console.log("user details entered")
    this.po.setDetailsofProductOwner(productowner).subscribe(console.log);
    this.router.navigateByUrl('projectownerdashboard')
  }

}
