import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUs4Component } from './about-us-4/about-us-4.component';

const routes: Routes = [
  {path:'',redirectTo:'whoWeAre4',pathMatch:'full'},
  {path:'whoWeAre4',component:AboutUs4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUs4RoutingModule { }
