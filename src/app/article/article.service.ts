/**
 * create by fky
 * create on 12/11/2018
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ArticleTypeModel} from "./type/article.type.model";
import {AppSettiong} from "../appsetting";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable()
export  class ArticleService {


    constructor(private http:HttpClient){}


    getArticleTypes (): Observable<Array<ArticleTypeModel>>{
        return this.http.get(`${AppSettiong.apiUrl}/article/typelist`).pipe(map( (res:Array<ArticleTypeModel>)=>{
            return res;
        }))
    }

}