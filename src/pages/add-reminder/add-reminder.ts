import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public af: AngularFire, public loadingController: LoadingController, 
    public toastController: ToastController) { }

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

    //if there is no duration set for this reminder,
    //the date should always be today's date
    if(!this.reminder.hasDuration){
      let today = new Date();
      this.reminder.date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
      this.reminder.time = "00:00";
    }

    //creates the loader to display
    let loader = this.loadingController.create({
      content: "Please wait..."
    });

    //displays the loader
    loader.present();

    //gets the reminder list instance from firebase database
    let reminderList = this.af.database.list("/reminders");

    //push a reminder to the list
    reminderList.push(this.reminder)
      //dismiss the loader when the reminder is pushed
      .then(() => {
        loader.dismiss();
        //goes back 1 level to the previous page
        this.navCtrl.pop();
      },
      //error handling, dismiss loader and log error
      (error) => {
        loader.dismiss();

        //creates a toast to display the error for 3 seconds
        let errorToast = this.toastController.create({
           message: 'Error has occured. '+error.message,
          duration: 3000,
          //show the toast on the top of the screen
          position: 'top'
        });
        // present the toast 
        errorToast.present();
        console.log(error);
      });
  }

  updateAvatar(path: string) {
    this.reminder.avatar = path;
  }



}
