import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FreelancerserviceService {

  constructor(private http: HttpClient) { }
  // getProjectsFreelancer()
  // {
  //   return this.http.get("http://localhost:3000/projects")
  //   // TODO: take the data and add that in the comment section in this call
  // }
  // getFreelancerDetails(emailId) {
  //   return this.http.get("http://localhost:3000/profile/" + emailId )
  // }

  
}
