import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'page-page-detail',
  templateUrl: 'page-detail.html'
})
export class PageDetailPage {

  reminder: Reminder;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.reminder = navParams.data;
    console.log(this.reminder);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageDetailPage');
  }

  getTodayDate() {
    return new Date();
  }

  deleteReminder() {
    //get the firebase database instance
    let reminderList = this.af.database.list("/reminders");

    //remove the reminder based on the key
    reminderList.remove(this.reminder.key)
      //when the remove is completed without error
      .then(() => {

      },
      //when an error has occured during the remove
      (fail) => {

      });

    //go back to previous page
    this.navCtrl.pop();
  }

}
