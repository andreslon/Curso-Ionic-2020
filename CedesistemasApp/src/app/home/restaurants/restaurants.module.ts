import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RestaurantsComponent } from "./restaurants.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: RestaurantsComponent,
      },
    ]),
  ],
})
export class RestaurantsModule {}
