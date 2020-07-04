import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificationPipe } from './pipes/calification.pipe';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [CalificationPipe, StorageService],
  imports: [
    CommonModule
  ],
  exports:[CalificationPipe]
})
export class SharedModule { }
