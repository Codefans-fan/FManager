/**
 * create by fky
 * create on 12/11/2018
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ArticleTypeModel} from "./type/article.type.model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export  class ArticleService {


    constructor(private http:HttpClient){}


    getArticleTypes (): Observable<Array<ArticleTypeModel>>{
        return this.http.get(`${environment.apiUrl}/article/typelist`).pipe(map( (res:Array<ArticleTypeModel>)=>{
            return res;
        }));
    }

    updateArticleTypes(list:Array<ArticleTypeModel>):Observable<Array<ArticleTypeModel>>{
        return this.http.put(`${environment.apiUrl}/article/updatetypes`,list).pipe(map((res:Array<ArticleTypeModel>)=>{
            return res;
        }));
    }

}