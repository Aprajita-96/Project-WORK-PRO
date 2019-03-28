import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreelancerserviceService {

  constructor(private http: HttpClient) { }
  getProjects()
  {
    return this.http
    .get("http://localhost:3000/projects")
    
  
  }
}
