import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule //even haven't import formsmodule, can still export
    //to let other imported module use it
  ]
})
export class SharedModule { }
