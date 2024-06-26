import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'',redirectTo:'whoWeAre',pathMatch:'full'},
  {path:'',component:MainComponent},

  {path:'whoWeAre',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUs1RoutingModule { }
