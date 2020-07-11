import { NavController } from "@ionic/angular";
import { RestaurantsService } from "./../restaurants/restaurants.service";
import { RestaurantModel } from "./../restaurants/restaurant.model";
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
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
  latitud: number = 0;
  longitud: number = 0;
  calificacion: number;

  title: string = "Crear restaurante";

  constructor(
    private restaurantsService: RestaurantsService,
    private navController: NavController,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params: RestaurantModel) => {
      this.id = params.id;
      if (this.id) {
        this.title = "Editar restaurante";

        this.nombre = params.nombre;
        this.imagen = params.imagen;
        this.direccion = params.direccion;
        this.telefono = params.telefono;
        this.sitioWeb = params.sitioWeb;
        this.latitud = Number(params.latitud);
        this.longitud = Number(params.longitud);
        this.calificacion = Number(params.calificacion);

      }
     
    });
  }

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

    if (this.id) {
      body.id = this.id;
      this.restaurantsService
        .updateRestaurant(this.id, body)
        .subscribe((data) => {
          window.localStorage.setItem("refresh", "true");
          this.navController.back();
        });
    } else {
      this.restaurantsService.addRestaurant(body).subscribe((data) => {
        window.localStorage.setItem("refresh", "true");
        this.navController.back();
      });
    }
  }
}
