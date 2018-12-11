/**
 * create by fky
 * create on 12/10/2018
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ArticlePage} from "./article.page";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import { TranslateModule} from '@ngx-translate/core';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticlePage
            }
        ])
    ],
    declarations: [ArticlePage]
})
export class ArticleModule {}