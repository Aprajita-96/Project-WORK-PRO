import { Component, OnInit } from '@angular/core';
import { ProductownerdetailsService } from '../productownerdetails.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  id:String;
  constructor(private projectService: ProductownerdetailsService,private route:ActivatedRoute) { }
  projects;

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.id=data.id;
      console.log(this.id)
    })
    this.projectService.getResults(this.id).subscribe((data: any) => {
      console.log(data)
      this.projects = data;
    });
}

}
