import { RestaurantsService } from './restaurants/restaurants.service';
import { FundamentsComponent } from './fundaments/fundaments.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule 
  ],
  declarations: [
    HomePage, 
    AboutComponent,
    FundamentsComponent
  ],
  providers:[RestaurantsService]
})
export class HomePageModule {}
