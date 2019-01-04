/**
 * create by fky
 * create on 1/3/2019
 */

export class ArticleModel{
    id:number;
    title:string;
    contentDesc:string;
    context:string;
    articleType:number;
    constructor(title?:string,context?:string){
        this.title=title?title:"";
        this.context = context?context:"";
    }

}