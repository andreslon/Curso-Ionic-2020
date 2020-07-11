import { RestaurantsService } from "./restaurants.service";
import { RestaurantModel } from "./restaurant.model";
import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { AlertController } from "@ionic/angular";
import { StorageService } from "src/app/shared/services/storage.service";
import { ActivatedRoute } from "@angular/router";

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
    private alertController: AlertController,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loadRestaurants();

    this.activatedRoute.params.subscribe((params: any) => {
      debugger;
      let refresh = window.localStorage.getItem("refresh");
      if (refresh) {
        window.localStorage.removeItem("refresh");
        this.loadRestaurants();
      }
    });
  }
  loadRestaurants() {
    this.restaurantsService
      .getRestaurants()
      .subscribe((data: RestaurantModel[]) => {
        this.restaurants = data;
        this.restaurantsAll = data;

        this.storageService.set("restaurants", data);
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

  async delete(id) {
    const alert = await this.alertController.create({
      header: "Confirmación",
      message: "¿Está seguro que desea eliminar el restaurante?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Aceptar",
          handler: () => {
            console.log("deleting");

            this.restaurantsService
              .deleteRestaurant(id)
              .subscribe((response) => {
                this.loadRestaurants();
              });
          },
        },
      ],
    });
    await alert.present();
  }
}
