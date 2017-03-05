import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { AngularFireModule } from 'angularfire2';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { PageDetailPage } from '../pages/page-detail/page-detail';

export const firebaseConfig = {
  apiKey: "AIzaSyDhbI01HUwMJ2-shoAVMA8OraIi94yE34M",
  authDomain: "ionicfirebase2.firebaseapp.com",
  databaseURL: "https://ionicfirebase2.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "269990381088"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReminderPage,
    ProgressBarComponent,
    PageDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReminderPage,
    PageDetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
