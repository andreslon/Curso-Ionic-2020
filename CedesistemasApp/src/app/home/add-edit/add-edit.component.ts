import { NavController } from "@ionic/angular";
import { RestaurantsService } from "./../restaurants/restaurants.service";
import { RestaurantModel } from "./../restaurants/restaurant.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class AddEditComponent implements OnInit {
  id: string;
  nombre: string;
  imagen: string;
  direccion: string;
  telefono: string;
  sitioWeb: string;
  latitud: number;
  longitud: number;
  calificacion: number;

  constructor(
    private restaurantsService: RestaurantsService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  guardar() {
    const body: RestaurantModel = {
      nombre: this.nombre,
      imagen: this.imagen,
      latitud: this.latitud,
      longitud: this.longitud,
      sitioWeb: this.sitioWeb,
      telefono: this.telefono,
      direccion: this.direccion,
      calificacion: this.calificacion,
    };

    this.restaurantsService.addRestaurant(body).subscribe((data) => {
      this.navController.back();
    });
  }
}
