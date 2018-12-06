/**
 * create by fky
 * create on 12/5/2018
 */
import {Injectable} from "@angular/core";
import {AuthToken} from "../models/token.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AuthService {

    private token_key:string = 'token';

    private currentSubject: BehaviorSubject<string>;

    public currentUser:Observable<string>;

    constructor(){
        let tmp = '';
        const authtoken =  this.getAuthToken();
        if(authtoken){
            tmp = authtoken.username;
        }
        this.currentSubject = new BehaviorSubject<string>(tmp);
        this.currentUser = this.currentSubject.asObservable();
    }

    public getToken() :string {
        return localStorage.getItem(this.token_key);
    }

    public isAuthenticated() : boolean{
        const token = this.getAuthToken();
        return token.isValid();
    }

    public setToken(token : string):void{
        localStorage.setItem(this.token_key, token);
        if(token){
            this.currentSubject.next(this.getAuthToken().username);
        }
    }

    public getAuthToken():AuthToken{
        return new AuthToken(this.getToken());
    }
}