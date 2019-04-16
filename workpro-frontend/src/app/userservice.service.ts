import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UserserviceService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
  saveUser(user: any) {
    return this.http.post("http://localhost:8081/registration", user);
  }
  loginUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ "Access-Control-Allow-Orgin": "*" });
    return this.http.post("http://localhost:8081/login", user, {
      headers: headers
    });
  }
  
}
