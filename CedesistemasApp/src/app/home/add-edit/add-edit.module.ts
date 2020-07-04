import { AddEditComponent } from './add-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddEditComponent],
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
            component: AddEditComponent,
          },
        ],
      },
    ]),
  ]
})
export class AddEditModule { }
