import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { GlasseComponent } from './glasse/glasse.component';

@NgModule({
  declarations: [ShopComponent,GlasseComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
