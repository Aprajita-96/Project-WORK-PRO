import {Injectable} from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { FreelancerDetailsService } from './freelancer-details.service';
import { ProductownerdetailsService } from './productownerdetails.service';
import { projection } from '@angular/core/src/render3';
@Injectable()
export class AuthGuard implements CanActivate{

    projectowner:any;
    user:any;

   constructor(private router: Router,private freelancerDetailsService:FreelancerDetailsService,private productownerdetailsService:ProductownerdetailsService){}

   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
       if(localStorage.getItem('currentUser')){
        if(localStorage.getItem('role')==='USER'){
            this.freelancerDetailsService.getDetailsOfFreelancers(localStorage.getItem('sub')).subscribe(data=>{
                this.user=data;
            });
            if(this.user.freelancerEmail===null){
                this.router.navigate(['/editfreelancerprofile']);
                return false;
            }
        }
        else{
            this.productownerdetailsService.getDtailsOfProjectOwner(localStorage.getItem('sub')).subscribe(data=>{
                this.projectowner=data;
            });
            if(this.projectowner.projectOwnerEmailId===null){
                this.router.navigate(['/editpoprofile']);
                return false;
            }
        }

        //    return true;
       }
       
       this.router.navigate(['/login']);
       return false;
      
   }
}