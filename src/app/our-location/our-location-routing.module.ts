import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurLocationComponent } from './our-location/our-location.component';

const routes: Routes = [
  {path:'',redirectTo:'location',pathMatch:'full'},
  {path:'location',component:OurLocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurLocationRoutingModule { }
