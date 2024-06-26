import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUs3Component } from './about-us-3/about-us-3.component';

const routes: Routes = [
  {path:'',redirectTo:'whoWeAre3',pathMatch:'full'},
  {path:'whoWeAre3',component:AboutUs3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUs3RoutingModule { }
