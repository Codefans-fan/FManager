/**
 * create by fky
 * create on 12/5/2018
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AppSettiong} from "../../appsetting";
import {AuthService} from "../../service/auth.service";

@Injectable()
export class AuthenticationService  {

    constructor(private http: HttpClient, private authService: AuthService){}

    login(username:string, password:string){
        return this.http.post(`${AppSettiong.apiUrl}/user/login`, {email:username, password:password}).pipe(map(res =>{
            if(res){
               const jsonString = JSON.stringify(res);
               const json = JSON.parse(jsonString);
                if(json.token){
                    this.authService.setToken(json.token);
                }
            }
        }));
    }

}