import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController } from 'ionic-angular';
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {AngularFireDatabase} from "angularfire2/database";
import {HomePage} from "../home/home";

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  eventDetails: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public angFire: AngularFireDatabase, public alertCtrl: AlertController) {
    this.eventDetails = this.angFire.list('/EventDetails');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

  sendDetails(itemDetails, locationDetails){
    console.log(itemDetails,locationDetails);
    if(itemDetails != "" && locationDetails != ""){
      this.eventDetails.push({
        item: itemDetails,
        location: locationDetails
      });
      this.navCtrl.push(HomePage);
    }
    else{
      let prompt = this.alertCtrl.create({
        title: "Attention",
        message: "No fields can be left empty",
        buttons:[{
          text: 'Cancel',
          handler: () => {

          }
        }]
      });

      prompt.present();
    }

  }
}
