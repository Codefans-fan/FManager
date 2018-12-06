/**
 * create by fky
 * create on 12/5/2018
 */
import {Injectable} from "@angular/core";
import {AuthToken} from "../models/token.model";

@Injectable()
export class AuthService {

    private token_key:string = 'token';

    public getToken() :string {
        return localStorage.getItem(this.token_key);
    }

    public isAuthenticated() : boolean{
        const token = new AuthToken(this.getToken());
        return token.isValid();
    }

    public setToken(token : string):void{
        localStorage.setItem(this.token_key, token);
    }

}