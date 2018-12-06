import {Component, OnDestroy} from '@angular/core';

import { Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from "./service/auth.service";
import {Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnDestroy {
    isAuth:boolean = false;
    currentUserSubscription: Subscription;
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
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
        }
    ];

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
            if(res){
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
}
