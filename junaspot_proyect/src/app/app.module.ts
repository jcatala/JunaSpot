import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//DONE BY ME


import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { GoogleMaps } from "@ionic-native/google-maps";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {

  apiKey: "AIzaSyAE6G2QBfvkU9bHtylsoRlIS4O-WglyoE8",
  authDomain: "junaspot-6666.firebaseapp.com",
  databaseURL: "https://junaspot-6666.firebaseio.com",
  projectId: "junaspot-6666",
  storageBucket: "junaspot-6666.appspot.com",
  messagingSenderId: "93794385645"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    AngularFireModule,
    AngularFireDatabaseModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
