import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './components/home-main/home-main.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},


  {path:'home',component:HomeMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
