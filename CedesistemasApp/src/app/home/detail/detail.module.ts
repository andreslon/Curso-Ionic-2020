import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { DetailComponent } from "./detail.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CallNumber } from '@ionic-native/call-number/ngx'; 
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DetailComponent],
  providers:[CallNumber],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        children: [
          {
            path: "",
            component: DetailComponent,
          },
        ],
      },
    ]),
  ],
})
export class DetailModule {}
