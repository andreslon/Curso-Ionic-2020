import { RestaurantsModule } from './restaurants/restaurants.module';
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
        children:[
          {
            path:'',
            loadChildren: () => import('./restaurants/restaurants.module').then((m)=> m.RestaurantsModule)
          },
          {
            path:'detail',
            children:[
              {
                path:'',
                loadChildren: () => import('./detail/detail.module').then((m)=> m.DetailModule)
              }
            ]
          }
        ]
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
