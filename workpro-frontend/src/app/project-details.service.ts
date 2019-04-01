import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor(private http:HttpClient) { }
  private baseUrl:String='http://localhost:3000/posts';
  public user:any={};
  saveToJson(user)
  {
    this.http.post('http://localhost:3000/posts',user).subscribe(data=>
      console.log(data))
  }
}
