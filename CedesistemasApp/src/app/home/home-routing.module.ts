import { AboutComponent } from './about/about.component';
import { FundamentsComponent } from './fundaments/fundaments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {
    path:'',
    //redirectTo:'/home/tabs/restaurants',
    //pathMatch: "full"
  },
  {
    path: 'tabs',
    component: HomePage,
    children:[

      {
        path: 'tab1',
        children: [
          {
            path: '',
            // loadChildren: './tab1/tab1.module#Tab1PageModule'
            loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule) 
          },
          {
            path: 'profile',
            children: [
              {
                path: '',
                loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule) 
              },
              {
                path: 'profile-settings',
                loadChildren: '../profile-settings/profile-settings.module#ProfileSettingsPageModule'
              }
            ]
          }
        ]
      },


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
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
