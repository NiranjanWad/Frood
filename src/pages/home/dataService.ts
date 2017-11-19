import {Injectable} from "@angular/core";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class DataService{
  eventDetails: FirebaseListObservable<any>
  constructor(private database: AngularFireDatabase){
    this.eventDetails = this.database.list('/EventDetails').valueChanges();
    console.log("Niranjan" +this.eventDetails);
  }

  getDetails(){
    return this.eventDetails;
  }
}
