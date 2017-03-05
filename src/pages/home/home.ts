import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddReminderPage } from '../add-reminder/add-reminder';

import { AngularFire } from 'angularfire2';

import { Reminder } from '../../classes/reminder';

import { PageDetailPage } from '../page-detail/page-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shouldShowEmptyState = true;

  reminderList: Reminder[] = [];
  
  backgroundColors: string[] = ["#96D096", "#61C8B4", "#D8D685", "#F1B96A"];

  constructor(public navCtrl: NavController, public af: AngularFire) {
  }

  gotoDetails(item: Reminder){
    this.navCtrl.push(PageDetailPage, item);
  }

  ionViewDidLoad() {
    let firebaseReminderList = this.af.database.list("/reminders");

    firebaseReminderList.subscribe(data =>
    //converts the array into reminder arrray
      this.reminderList = data.map((item) => {
        let reminder: Reminder = Object.assign(new Reminder(), item);
        reminder.key = item.$key;
        return reminder;
      }));

  }

  navigateToReminder() {
    this.navCtrl.push(AddReminderPage);

  }


}
