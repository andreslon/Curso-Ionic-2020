import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CalificationPipe } from './calification.pipe';



@NgModule({
  declarations: [ CalificationPipe],
  imports: [
    CommonModule
  ],
  exports:[ CalificationPipe]
}) 
export class SharedModule { }
