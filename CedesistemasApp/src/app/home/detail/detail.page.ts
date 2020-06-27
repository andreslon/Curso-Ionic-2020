import { RestaurantModel } from './../restaurants/restaurant.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; 
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  
  item:RestaurantModel;


  constructor(
    private activatedRoute: ActivatedRoute,
    private callNumber: CallNumber,
    private iab: InAppBrowser) {
    this.activatedRoute.params.subscribe((params:RestaurantModel) => {
     this.item=params;
    });
  }

  ngOnInit() {}

  callPhone(number){
    this.callNumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  openWeb(url){
    this.iab.create(url);
  }
}
 