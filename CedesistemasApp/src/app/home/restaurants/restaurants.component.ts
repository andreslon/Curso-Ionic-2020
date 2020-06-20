import { RestaurantsService } from "./restaurants.service";
import { Component, OnInit } from "@angular/core";
import { RestaurantModel } from "./restaurant.model";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.scss"],
})
export class RestaurantsComponent implements OnInit {
 public restaurants: RestaurantModel[] =[] ;
  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    this.loadRestaurants();
  }
  private loadRestaurants() {
    this.restaurantsService!.getAll().subscribe((data: RestaurantModel[]) => {
      this.restaurants=data; 
    }); 
  }
}
