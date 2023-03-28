import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () =>
      import('../shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'our',
    loadChildren: () =>
      import('../our/our.module').then((m) => m.OurModule),
  },
  {
    path: '**',
    redirectTo: 'shop'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    useHash: true,
})],
  exports: [RouterModule]
})
export class MainRoutingModule { }
