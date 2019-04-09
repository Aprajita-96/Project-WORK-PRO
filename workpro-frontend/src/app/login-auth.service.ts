import { Injectable } from '@angular/core';
import {Subject,Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private subject = new Subject<any>();
  isLoggedIn(){
    if(localStorage.getItem('currentUser')){
      this.subject.next({status: true});
    }else{
      this.subject.next({status: false});
    }
  }  clearStatus(){
    this.subject.next();
  } 
   getStatus():Observable<any>{
    return this.subject.asObservable();
  }
  checkToken():any{
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    return decodedToken;
  }
  constructor() { }
}
