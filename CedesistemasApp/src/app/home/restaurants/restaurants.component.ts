import { RestaurantsService } from "./restaurants.service";
import { RestaurantModel } from "./restaurant.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.scss"],
})
export class RestaurantsComponent {
  restaurants: RestaurantModel[] = [];

  constructor(private restaurantsService: RestaurantsService) {
    this.loadRestaurants();
  }
  loadRestaurants() {
    this.restaurantsService
      .getRestaurants()
      .subscribe((data: RestaurantModel[]) => {
        this.restaurants = data;
      });
  }
}
