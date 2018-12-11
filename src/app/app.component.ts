import {Component, OnDestroy, OnInit} from '@angular/core';

import { Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from "./service/auth.service";
import {Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles:[`
        .split-pane-visible >.split-pane-side {
            flex-grow: 2;
        }
        .split-pane-visible >.split-pane-main {
            flex-grow: 72;
        }
    `]
})
export class AppComponent implements OnInit, OnDestroy {
    isAuth:boolean = false;
    currentUserSubscription: Subscription;
    public appPages = [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateService,
        private authService: AuthService,
        private router: Router,
    ) {
        this.initializeApp();
        this.initTranslate();
        this.currentUserSubscription = this.authService.currentUser.subscribe( res => {
            if(res && this.authService.isAuthenticated()){
                console.log(res);
                this.isAuth = true;
            }
        });

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (!this.authService.isAuthenticated()) {
                this.router.navigate(['/auth/login']);
            }
        });
    }

    initTranslate() {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');

        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        } else {
            this.translate.use('en');
        }
    }

    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.initMenuPage();
    }

    private initMenuPage():void{
        this.translate.get(['menu.titles.home','menu.titles.profile','menu.titles.article']).subscribe(res =>{

            this.appPages = [{
                    title: res['menu.titles.home'],
                    url: '/home',
                    icon: 'home'
                },
                {
                    title: res['menu.titles.article'],
                    url: '/article',
                    icon: 'construct'
                },
                {
                    title: res['menu.titles.profile'],
                    url: '/auth/profile',
                    icon: 'contact'
                },
                {
                    title: 'login',
                    url: '/auth/login',
                    icon: 'login'
                },
                {
                    title: 'register',
                    url: '/auth/register',
                    icon: ''
                }];

        });


    }


}
