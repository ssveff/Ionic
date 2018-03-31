import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { EventListPage } from '../pages/event-list/event-list';
import { ProfilePage } from '../pages/profile/profile';


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  appMenuItems: Array<MenuItem>;

  accountMenuItems: Array<MenuItem>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Home', component: WelcomePage, icon: 'star'},
            {title: 'Help Wanted', component: EventListPage, icon: 'star'},
            // {title: 'Offered Help', component: FavoriteListPage, icon: 'star'},
        ];

        this.accountMenuItems = [
            {title: 'My Account', component: ProfilePage, icon: 'ios-contact'},
            {title: 'Logout', component: WelcomePage, icon: 'log-out'},
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
