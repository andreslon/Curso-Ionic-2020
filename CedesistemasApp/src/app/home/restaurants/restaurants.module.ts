import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 
import { RestaurantsComponent } from './restaurants.component';


@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RestaurantsComponent }])
  ]
})
export class RestaurantsModule { }


 