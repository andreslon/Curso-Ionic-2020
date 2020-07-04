import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calification",
})
export class CalificationPipe implements PipeTransform {
  transform(value: number): string { 
    if (!value) {
      return "";
    }
    if (value <= 1) {
      //Rojo
      return "#e74c3c";
    } else if (value >= 4) {
      //Verde
      return "#2ecc71";
    } else {
      //Amarillo
      return "#f1c40f";
    }
  }
}
