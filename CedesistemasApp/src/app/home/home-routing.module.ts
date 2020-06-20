import { AboutComponent } from "./about/about.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

const routes: Routes = [
  {
    path: "tabs",
    component: HomePage,
    children: [
      {
        path: "restaurants",
        component: RestaurantsComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
    ],
  },
  {
    path: "",
    redirectTo: "/home/tabs/restaurants",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
