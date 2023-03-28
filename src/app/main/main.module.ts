import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../home/home.module';
import { ShopModule } from '../shop/shop.module';
import { ContactModule } from '../contact/contact.module';
import { OurModule } from '../our/our.module';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavComponent, ContentComponent, FooterComponent, MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
