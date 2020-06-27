import { RestaurantModel } from "./../restaurants/restaurant.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; 
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  item: RestaurantModel;

  constructor(private activatedRoute: ActivatedRoute, private callNumber: CallNumber) {
    this.activatedRoute.params.subscribe((params: RestaurantModel) => {
      this.item = params;
      this.loadProducts(this.item.id);
    }); 
  }

  ngOnInit() {}

  loadProducts(id){

  }

  callPhone(phone){
    this.callNumber.callNumber(phone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
