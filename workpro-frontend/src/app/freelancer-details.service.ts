import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FreelancerDetailsService {
  value:any;
  data:any;
  constructor(private http:HttpClient) { }
  getDetailsOfFreelancers(value) {
    return this.http.get("http://localhost:8082/api/v1/freelancer/"+value);
  }
  

  updateDetailsofFreelancers(value,data){
    return this.http.put("http://localhost:8082/api/v1/freelancerprofile/"+value,data);
  }

  // setDetailsofFreelancers(data) {
  //      console.log(data)
  //      return this.http.post('http://localhost:3000/xyz', data)//This is the port where json server runs."ports" specifies the end point in the db.json file
  // }
  // setDetailsofProductOwner(productowner){
  //   console.log(productowner);
  //   return this.http.post('http://localhost:3000/po',productowner);
  // }

  getBidsofFreelancer(value){
    return this.http.get("http://localhost:8082/api/v1/bid/allbids/"+value);
  }
  setFreelancerDetails(value)
  {
      return this.http.get("http://localhost:8082/api/v1/freelancer/"+value);
    
  }


  getSearchResults(skill) {
    return this.http.get("http://localhost:8082/api/v1/skill/" + skill);
  }
  
}
