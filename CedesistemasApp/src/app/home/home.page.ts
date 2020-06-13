import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  nombre: string;
  apellidos: string;
  edad: number;

  estudiantes: Estudiante[];

  constructor() {
    this.estudiantes = [];
  }

  crearEstudiante() {
    this.estudiantes.push({
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
    });
  }
}

//Modelo
interface Estudiante {
  nombre: string;
  apellidos: string;
  edad: number;
}
