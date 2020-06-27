import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calification",
})
export class CalificationPipe implements PipeTransform {
  transform(value: Number): string {
    if (value == null) {
      return '';
    } 
    if (value <= 2) {
      return "assets/bad.svg";
    } else if (value == 3) {
      return "assets/neutro.svg";
    } else {
      return "assets/good.svg";
    }
  }
}
