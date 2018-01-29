import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CartPage } from '../pages/cart/cart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAgFXmc18OzAPcJRV-cShxaq9psst4Yd1U",
  authDomain: "ecommdemo-5f17a.firebaseapp.com",
  databaseURL: "https://ecommdemo-5f17a.firebaseio.com",
  projectId: "ecommdemo-5f17a",
  storageBucket: "ecommdemo-5f17a.appspot.com",
  messagingSenderId: "689867688612"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
