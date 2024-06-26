import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
  {path:'',redirectTo:'join-us',pathMatch:'full'},
  {path:'join-us',component:JoinUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinUsRoutingModule { }
