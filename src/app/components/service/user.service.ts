/**
 * create by fky
 * create on 12/9/2018
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppSettiong} from "../../appsetting";
import {map} from "rxjs/operators";
import {UserRoleModel} from "../../models/user/userrole.model";

@Injectable()
export  class UserService {

    constructor(private http: HttpClient){}


    getUserDetail (){
       return this.http.get(`${AppSettiong.apiUrl}/user/userdetail`);
    }

    getRoles(){
        return this.http.get(`${AppSettiong.apiUrl}/user/roles`).pipe(map( (res: Array<UserRoleModel> ) =>{
             return res;
        }));

    }
}