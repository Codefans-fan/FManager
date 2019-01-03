/**
 * create by fky
 * create on 12/5/2018
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthenticationService  {

    constructor(private http: HttpClient, private authService: AuthService){}

    login(email:string, password:string){
        return this.http.post(`${environment.apiUrl}/user/login`, {email:email, password:password}).pipe(map(res =>{
            if(res){
               const jsonString = JSON.stringify(res);
               const json = JSON.parse(jsonString);
                if(json.token){
                    this.authService.setToken(json.token);
                }
            }
        }));
    }

    register(email:string,password:string,repassword:string,fullname:string){
        return this.http.post(`${environment.apiUrl}/user/register`, {email:email, password:password, comfirmPassword:repassword,userName:fullname});
    }


}