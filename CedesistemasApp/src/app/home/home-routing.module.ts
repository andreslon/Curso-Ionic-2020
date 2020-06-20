import { AboutComponent } from './about/about.component';
import { FundamentsComponent } from './fundaments/fundaments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home/tabs/restaurants',
    pathMatch: "full"
  },
  {
    path: 'tabs',
    component: HomePage,
    children:[
      {
        path:"restaurants",
        component: RestaurantsComponent
      },
      {
        path:"fundaments",
        component: FundamentsComponent
      },
      {
        path:"about",
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
