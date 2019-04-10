import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductownerdetailsService {

  constructor(private http:HttpClient) {}

  getDtailsOfProjectOwner(value){
    return this.http.get("http://localhost:8083/api/v1/projectOwner/"+value);
  }
  
    setProjectDetails(value){
     return this.http.post("http://localhost:8090/api/v1/projects/project",value, {responseType: "text"});

    }

    getProjectDetails(value){
      return this.http.get("http://localhost:8090/api/v1/projectowner/"+value+"/project");
    }
   
}
