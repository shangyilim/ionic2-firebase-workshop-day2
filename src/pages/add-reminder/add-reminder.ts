import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
/* 
  Generated class for the AddReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html'
})
export class AddReminderPage {

  reminder: Reminder = new Reminder();
  avatarRows = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');
    this.reminder.avatar = "assets/images/clock.png";

    this.avatarRows.push({
      value: [
        "assets/images/backpack.png",
        "assets/images/ball.png",
        "assets/images/basketball.png",
        "assets/images/bear.png",
        "assets/images/beer.png",
        "assets/images/book.png"
        ]
    });
    this.avatarRows.push({
      value: [
        "assets/images/box.png",
        "assets/images/cake.png",
        "assets/images/camera.png",
        "assets/images/cat.png",
        "assets/images/clock.png",
        "assets/images/cloud.png"
        ]
    });
    this.avatarRows.push({
      value: [
        "assets/images/game.png",
        "assets/images/gift.png",
        "assets/images/graduation.png",
        "assets/images/mastercard.png",
        "assets/images/moneybag.png",
        "assets/images/movie.png"
        ]
    });

    this.avatarRows.push({
      value: [
        "assets/images/rainbow.png",
        "assets/images/rice.png",
        "assets/images/spaghetti.png",
        "assets/images/sun.png",
        "assets/images/syringe.png",
        "assets/images/throphy.png"
        ]
    });


  }

  createReminder() {
    console.log(this.reminder);
  }

  updateAvatar(path: string) {
    this.reminder.avatar = path;
  }

}
