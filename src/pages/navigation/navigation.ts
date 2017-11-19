import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {
  @ViewChild('map') mapRef: ElementRef;
  location: string;
  // lat: any;
  // lng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams){}
    // , public geo: Geolocation) { }

  ionViewDidLoad() {
    // console.log(this.mapRef);
    this.showMap();
    // this.geo.getCurrentPosition().then( pos => {
    //   this.lat  = pos.coords.latitude;
    //   this.lng = pos.coords.longitude;
    // }).catch( err => console.log(err));
  }

  showMap(){
    // this.location = new google.maps.LatLng(this.lat,this.lng);
    this.location = new google.maps.LatLng(40.730610,-73.935242);
    const options = {
      center: this.location,
      zoom: 10,
      mapTypeId:'roadmap'
    }

    const map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(this.location, map);

  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }

}
