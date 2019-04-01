import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from '../project-details.service';


@Component({
  selector: 'app-project-detail-form',
  templateUrl: './project-detail-form.component.html',
  styleUrls: ['./project-detail-form.component.scss']
})
export class ProjectDetailFormComponent implements OnInit {
  public user :any ={}; 
  skills = [];
  bid=[];
  addBidToProjects=false;
  constructor(private projectDetailsService:ProjectDetailsService) { }
  projectDetails=[
    {
      "id": 0,
      "Domain": "IT",
      "projectname": "Mobile Management System",
      "field":" software",
      "discription": "In velit ullamco occaecat anim dolor consectetur veniam do id excepteur sit.",
      "projectDuration": "1 month",
      "skillset":"advance",
      "bidrate": 642,
      "duration":100,
      "country": "Kyrgyzstan",
      "preference": "Onsite",
      "status":"open"
    },  
    {
      "id": 1,
      "Domain": "EVENT MANAGEMENT",
      "field":" software",
      "projectname": "In officia fugiat laborum sint duis dolor dolore sint ad.",
      "discription": "Deserunt veniam commodo adipisicing laboris velit tempor id eu Lorem commodo qui eu.",
      "projectDuration": "6 month",
      "skillset":"begineers",
      "bidrate": 415,
      "duration":100,
      "country": "Suriname",
      "preference": "Remote",
      "status":"open"
    },
    {
      "id": 2,
      "Domain": "IT",
      "field":" hardware",
      "projectname": "Aliqua ea ut ad reprehenderit voluptate aliquip mollit consectetur cupidatat voluptate ullamco non.",
      "discription": "Lorem ea velit nostrud adipisicing qui quis adipisicing occaecat.",
      "projectDuration": "1 year",
      "skillset":"begineers",
      "bidrate": 162,
      "duration":100,
      "country": "Luxembourg",
      "preference": "Onsite",
      "status":"open"
    },
    {
      "id": 3,
      "Domain": "IT",
      "field":" networking",
      "projectname": "Voluptate aute minim elit ex magna.",
      "discription": "Aliquip ea aliqua occaecat veniam.",
      "projectDuration": "2 year",
      "skillset":"advance",
      "duration":100,
      "bidrate": 404,
      "country": "Ecuador",
      "preference": "Remote",
      "status":"open"
    },
    {
      "id": 4,
      "Domain": "IT",
      "field":" data science",
      "projectname": "Cupidatat minim nostrud est quis reprehenderit exercitation commodo veniam consequat.",
      "discription": "Ex mollit enim do ea officia mollit sit occaecat eu excepteur nulla.",
      "projectDuration": "3 year",
      "skillset":"intermediate",
      "bidrate": 519,
      "duration":100,
      "country": "Antarctica",
      "preference": "Remote",
      "status":"close"
    },
    {
      "id": 5,
      "Domain": "IT",
      "projectname": "Dolore et eu cillum culpa eiusmod sit mollit voluptate laborum est fugiat.",
      "discription": "Esse sunt dolore nisi dolor fugiat non est aute voluptate occaecat ipsum.",
      "projectDuration": "5 year",
      "skillset":"beginners",
      "bidrate": 300,
      "duration":100,
      "country": "Slovak Republic",
      "preference": "Onsite",
      "status":"open"
    }
  ]

    
  ngOnInit() {
  }
      saveUser(user:any, userForm:any)
      {
        user.skills = this.skills;
        user.bid=this.bid;
        console.log(user);
        this.projectDetailsService.saveToJson(user)
        this.skills=[]  

      }
      addSkill(skill) {
        let skillDetails = {
          yearsOfExp: skill.skillExp,
          level: skill.level,
          skillName: skill.skillName
        }
        this.skills.push(skillDetails)
      }

      addBid(bid){
        let bidDetails=
        {
          bidDuration:bid.bidduration,
          bidStatus:bid.bidstatus,
          bidPrefrence:bid.bidpreference,
          bidLocation:bid.bidLocation,
          bidRate:bid.bidrate
        }
        this.addBidToProjects=true;
        this.bid.push(bidDetails)
      }
      deleteSkill(skill){
        this.skills = this.skills.filter(e => e.skillName !== skill.skillName)
      }

}
