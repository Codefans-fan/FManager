import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

/**
 * create by fky
 * create on 12/11/2018
 */

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService:AuthService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isAuthenticated()){
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false
    }
}