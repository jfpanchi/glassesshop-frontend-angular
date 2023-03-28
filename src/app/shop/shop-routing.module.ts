import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { GlasseComponent } from './glasse/glasse.component';

const routes: Routes = [

  {
    path: 'glasse/:id',
    component: ShopComponent
  },
  {
    path: '**',
    redirectTo: 'glasse/0'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
