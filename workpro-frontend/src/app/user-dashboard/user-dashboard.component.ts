import { Component, OnInit } from '@angular/core';
import { FreelancerserviceService } from "../freelancerservice.service";
import { ProductownerdetailsService } from '../productownerdetails.service';
import { RecommendationService } from '../recommendation.service';
import { FreelancerDetailsService } from '../freelancer-details.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private projectService: ProductownerdetailsService,private recommendation:RecommendationService,private freelancerdetails:FreelancerDetailsService ) { }
  projects;
  skill:any;
  recommendedProjects:any;
  profile:any=[];
  isSearch:boolean=true
  // skills:String
  

   ngOnInit() {
     var skills = new String();
    this.freelancerdetails.getDetailsOfFreelancers(localStorage.getItem('email')).subscribe(data=>{
      console.log(data);
      this.profile=data;
      this.skill=this.profile.skills;
      console.log(this.skill)
      let lastindex=this.skill.length;
     
      for(var i of this.skill){
        let indexof=this.skill.lastIndexOf(i)
        if(indexof===lastindex-1){
        skills=skills.concat(i)
        }
        else{
          skills=skills.concat(i+",")
        }
        

      }
      console.log(skills)
     this.recommendation.getAllProjectRecommendation(skills).subscribe(data=>{
      this.recommendedProjects=data
      console.log(this.recommendedProjects)
     })
    });
}
searchProject(skill) {
  this.isSearch=false;
  this.projectService.getResults(skill).subscribe((data: any) => {
    console.log(data)
    this.projects = data;
  });
}
}


  // projects = [
  //   {
  //     "name": "Phillips",
  //     "id": 0,
  //     "discription": "Exercitation dolore excepteur eu ea Lorem anim ullamco aliquip Lorem velit est laboris.",
  //     "status": false
  //   },
  //   {
  //     "name": "Mckay",
  //     "id": 10,
  //     "discription": "Eiusmod elit fugiat fugiat Lorem incididunt ex duis enim.",
  //     "status": true
  //   },
  //   {
  //     "name": "Alisa",
  //     "id": 20,
  //     "discription": "Deserunt Lorem eiusmod magna officia velit nisi eiusmod irure culpa in quis duis est.",
  //     "status": false
  //   },
  //   {
  //     "name": "Maryann",
  //     "id": 30,
  //     "discription": "Magna voluptate exercitation culpa sint non aute ipsum pariatur est dolore nulla laboris fugiat.",
  //     "status": false
  //   },
  //   {
  //     "name": "Lacy",
  //     "id": 40,
  //     "discription": "Occaecat aliquip non quis ex aute aliquip eiusmod laboris eu non dolore.",
  //     "status": false
  //   }
  // ]

