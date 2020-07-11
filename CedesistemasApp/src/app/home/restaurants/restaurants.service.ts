import { RestaurantModel } from "./restaurant.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RestaurantsService {
  constructor(private httpClient: HttpClient) {}

  getRestaurants() {
    const url =
      "https://cedesistemas-app-api.azurewebsites.net/api/Restaurantes";
    return this.httpClient.get(url);
  }

  deleteRestaurant(id) {
    const url =
      "https://cedesistemas-app-api.azurewebsites.net/api/Restaurantes/" + id;
    return this.httpClient.delete(url);
  }

  addRestaurant(body: RestaurantModel) {
    const url =
      "https://cedesistemas-app-api.azurewebsites.net/api/Restaurantes";
    return this.httpClient.post(url, body);
  }

  updateRestaurant(id:string, body:RestaurantModel){ 
    const url =
    "https://cedesistemas-app-api.azurewebsites.net/api/Restaurantes/" + id;
  return this.httpClient.put(url, body);
  }

}
