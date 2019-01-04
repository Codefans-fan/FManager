/**
 * create by fky
 * create on 1/3/2019
 */

import {Component} from "@angular/core";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ArticleModel} from "../article.model";
import {LoadingController, NavController, ToastController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";
import {ArticleService} from "../article.service";
import {first} from "rxjs/operators";
import Utils from "../../service/utils";
import {ArticleTypeModel} from "../type/article.type.model";

@Component({
    selector: "ngx-article-publish",
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.scss']
})

export class PublishComponent {
    public Editor = ClassicEditor;

    article: ArticleModel;

    articleTypes: Array<ArticleTypeModel> = [];

    constructor(private navController: NavController, private loadingController: LoadingController, public toastController: ToastController, private translateService: TranslateService, private articleService: ArticleService) {
        this.article = new ArticleModel();

        this.articleService.getArticleTypes().pipe(first()).subscribe(res => {
            this.articleTypes = res;
        }, error => {
            console.log(error);
        });
    }

    saveArticle() {
        if (Utils.propertyContainEmpty(this.article)) {
            this.translateService.get('article.message.empty').subscribe(res => {
                this.warningToast(res);
            });
            return
        }


        this.articleService.updateArticle(this.article).pipe(first()).subscribe(res => {
            this.article = res;
            this.translateService.get('article.message.success').subscribe(msg => {
                this.successToast(msg);
            });
        }, error => {
            console.log(error);
            this.translateService.get('article.message.failed').subscribe(msg => {
                this.failedToast(msg);
            });
        })
    }


    typeUpdate(event){
        this.article.articleType = event.detail.value;
    }

    private async successToast(message) {
        const toast = await this.toastController.create({
            color: 'success',
            position: 'top',
            message: message,
            duration: 2000
        });
        toast.present();
    }

    private async failedToast(message) {
        const toast = await this.toastController.create({
            color: 'danger',
            position: 'top',
            message: message,
            duration: 2000
        });
        toast.present();
    }

    private async warningToast(message) {
        const toast = await this.toastController.create({
            color: 'warning',
            position: 'top',
            message: message,
            duration: 2000
        });
        toast.present();
    }

}