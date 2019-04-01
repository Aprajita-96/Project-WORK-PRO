import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FreelancerDetailsService {
  value:any;
  constructor(private http:HttpClient) { }
  getDetailsOfFreelancers(value) {
    // this.value=value;
  }
  setDetailsofFreelancers(data) {
       console.log(data)
       return this.http.post('http://localhost:3000/xyz', data)//This is the port where json server runs."ports" specifies the end point in the db.json file
  }
}
