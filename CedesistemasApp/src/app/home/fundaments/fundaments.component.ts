import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundaments',
  templateUrl: './fundaments.component.html',
  styleUrls: ['./fundaments.component.scss'],
})
export class FundamentsComponent implements OnInit {
 

  ngOnInit() {}

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
