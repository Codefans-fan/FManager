/**
 * create by fky
 * create on 12/9/2018
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {UserRoleModel} from "../../models/user/userrole.model";
import {environment} from "../../../environments/environment";

@Injectable()
export  class UserService {

    constructor(private http: HttpClient){}


    getUserDetail (){
       return this.http.get(`${environment.apiUrl}/user/userdetail`);
    }

    getRoles(){
        return this.http.get(`${environment.apiUrl}/user/roles`).pipe(map( (res: Array<UserRoleModel> ) =>{
             return res;
        }));

    }
}