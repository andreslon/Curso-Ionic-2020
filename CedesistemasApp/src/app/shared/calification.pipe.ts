import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calification",
})
export class CalificationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value == null) {
      return "";
    }
    if (value <= 2) {
      return "#e74c3c";
    } else if (value == 3) {
      return "#f1c40f";
    } else {
      return "#2ecc71";
    }
  }
}
