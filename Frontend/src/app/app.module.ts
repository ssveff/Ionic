import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from "@ionic/storage";
import { BrowserModule } from '@angular/platform-browser';
import {CustomFormsModule} from 'ng2-validation';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";

import { AddPlacePage } from "../pages/add-place/add-place";
import { PlacePage } from "../pages/place/place";
import { SetLocationPage } from "../pages/set-location/set-location";
import { EventListPage } from "../pages/event-list/event-list";
import { ProfilePage } from "../pages/profile/profile";
import { AgmCoreModule } from "angular2-google-maps/core";

import { PlacesService } from "../services/places";
import { ProfileService } from "../services/profile-service-mock";
import { AuthService } from "../services/auth";


export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => storage.get('jwt_token'),
    whitelistedDomains: ['localhost:8080']
  }
}


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    LoginPage,
    SignupPage,
    AddPlacePage,
    PlacePage,
    SetLocationPage,
    EventListPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
      provide: JWT_OPTIONS,
      useFactory: jwtOptionsFactory,
      deps: [Storage]
      }
    }),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    CustomFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1DqPR9cC4gZEEHXqGr32qXOFFcAdOCkM'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    LoginPage,
    SignupPage,
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
    AuthService,
    PlacesService,
    ProfileService
  ]
})
export class AppModule {
}
