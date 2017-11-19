import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { NavigationPage } from '../pages/navigation/navigation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {Geolocation} from '@ionic-native/geolocation';

export const firebaseConfig = {
  apiKey: "AIzaSyCURNTYFPSuQZp1n7Nfdc_BQ_I33XWtMiw",
  authDomain: "freefood-c8db7.firebaseapp.com",
  databaseURL: "https://freefood-c8db7.firebaseio.com",
  projectId: "freefood-c8db7",
  storageBucket: "",
  messagingSenderId: "881153448171"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventDetailsPage,
    NavigationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventDetailsPage,
    NavigationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
