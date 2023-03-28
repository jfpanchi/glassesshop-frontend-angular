import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurComponent } from './our.component';
import { OurRoutingModule } from './our-routing.module';

@NgModule({
  declarations: [OurComponent],
  imports: [
    CommonModule,
    OurRoutingModule
  ],
  exports: [OurComponent]
})
export class OurModule { }
