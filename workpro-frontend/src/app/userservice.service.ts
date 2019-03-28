import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) {
    this.http=http;
   }
   saveUser(user:any){
    
    return this.http.post("http://localhost:8080/registration",user);

   }
  }
