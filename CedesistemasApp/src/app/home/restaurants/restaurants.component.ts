import { RestaurantsService } from "./restaurants.service";
import { RestaurantModel } from "./restaurant.model";
import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/shared/services/storage.service";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.scss"],
})
export class RestaurantsComponent {
  restaurants: RestaurantModel[] = [];
  restaurantsAll: RestaurantModel[] = [];

  constructor(
    private restaurantsService: RestaurantsService,
    private storage: StorageService
  ) {
    this.loadRestaurants();
  }
  loadRestaurants() { 
    this.storage.get("restaurants").then((data: any) => {
      if (data) {
        this.restaurants = data;
      } else {
        this.restaurantsService
          .getRestaurants()
          .subscribe((data: RestaurantModel[]) => {
            this.restaurants = data;
            this.restaurantsAll = data;

            this.storage.set('restaurants', data);

          });
      }
    });
  }

  search(evt) {
    const text: string = evt.srcElement.value;
    if (!text) {
      this.loadRestaurants();
    }
    this.restaurants = this.restaurantsAll.filter((r: RestaurantModel) => {
      if (r.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
        return r;
      }
    });
  }

  delete(id) {}
}
