import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductownerdetailsService {
  value:any;
  data:any;
  constructor(private http:HttpClient) { }
  getDtailsOfProjectOwner(value){
    return this.http.get("http://localhost:8083/api/v1/projectOwner/"+value);
  }
  updateDetailsOfProjectOwner(value,data)
  {
    return this.http.put("http://localhost:8083/api/v1/projectOwner/"+value,data);
  }
}
