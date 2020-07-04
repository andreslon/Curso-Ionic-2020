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
  restaurantsAll: RestaurantModel[] = [];

  
  constructor(private restaurantsService: RestaurantsService) {
    this.loadRestaurants();
  }
  loadRestaurants() {
    this.restaurantsService
      .getRestaurants()
      .subscribe((data: RestaurantModel[]) => {
        this.restaurants = data;
        this.restaurantsAll = data;
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

  delete(id){
    
  }
}
