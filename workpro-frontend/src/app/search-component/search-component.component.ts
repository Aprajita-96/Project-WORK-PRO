import { Component, OnInit } from '@angular/core';
import { ProductownerdetailsService } from '../productownerdetails.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  constructor(private projectService: ProductownerdetailsService) { }
  projects;

  ngOnInit() {
}
searchProject(skill) {
  this.projectService.getResults(skill).subscribe((data: any) => {
    console.log(data)
    this.projects = data;
  });
}
}
