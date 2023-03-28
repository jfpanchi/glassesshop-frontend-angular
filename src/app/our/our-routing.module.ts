import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurComponent } from './our.component';

const routes: Routes = [
  {
    path: '',
    component: OurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurRoutingModule { }
