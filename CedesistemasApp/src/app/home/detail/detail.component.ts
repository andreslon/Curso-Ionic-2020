import { RestaurantModel } from "./../restaurants/restaurant.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; 

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  item: RestaurantModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: RestaurantModel) => {
      this.item = params;
    });
  }

  ngOnInit() {}
}
