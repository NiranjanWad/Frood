import { Component,OnInit } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { DataService } from './dataService';
import { EventDetailsPage } from '../event-details/event-details';
import { NavigationPage } from '../navigation/navigation';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService]
})
export class HomePage implements OnInit {

  details: FirebaseListObservable<any>;
  constructor(private data: DataService, private navCtrl: NavController) { }

  ngOnInit(){
    this.details = this.data.getDetails();
  }

  addEvent(): void {
    this.navCtrl.push(EventDetailsPage);

  }

  navigate(foodItem, loc){
    console.log(foodItem, loc);
    this.navCtrl.push(NavigationPage, {parameter: loc});
  }
  // navigate(){
  //   console.log("Its Here");
  //   //this.navCtrl.push(NavigationPage);
  // }
}
