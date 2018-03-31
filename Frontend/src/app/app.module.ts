import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { AddPlacePage } from "../pages/add-place/add-place";
import { PlacePage } from "../pages/place/place";
import { SetLocationPage } from "../pages/set-location/set-location";
import { EventListPage } from "../pages/event-list/event-list";
import { ProfilePage } from "../pages/profile/profile";
import { AgmCoreModule } from "angular2-google-maps/core";
import { PlacesService } from "../services/places";
import { ProfileService } from "../services/profile-service-mock";




@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage,
    EventListPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1DqPR9cC4gZEEHXqGr32qXOFFcAdOCkM'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage,
    EventListPage,
    ProfilePage
  ],
  providers: [
    File,
    Camera,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,
    ProfileService
  ]
})
export class AppModule {
}
