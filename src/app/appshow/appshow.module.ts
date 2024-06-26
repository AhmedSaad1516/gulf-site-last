import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppshowRoutingModule } from './appshow-routing.module';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppshowRoutingModule
  ]
})
export class AppshowModule { }
