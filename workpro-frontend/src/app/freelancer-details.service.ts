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
  

  updateDetailsofFreelancers(email,data){
    return this.http.put("http://localhost:8082/api/v1/freelancerprofile/"+email,data);
  }

  

  getBidsofFreelancer(value){
    return this.http.get("http://localhost:8082/api/v1/bid/allbids/"+value);
  }
  postFreelancerDetails(value)
  {
      return this.http.post("http://localhost:8082/api/v1/freelancerprofile/postDetails",value, {responseType: 'text'});
    
  }


  getSearchResults(skill) {
    return this.http.get("http://localhost:8082/api/v1/skill/" + skill);
  }

  postBids(poemail,pid,body){
    return this.http.post("http://localhost:8090/api/v1//projectOwner/"+poemail+"/projects/"+pid+"/bid",body);
  }
  
}
