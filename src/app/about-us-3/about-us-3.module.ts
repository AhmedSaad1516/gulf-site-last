import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUs3RoutingModule } from './about-us-3-routing.module';
import { AboutUs3Component } from './about-us-3/about-us-3.component';


@NgModule({
  declarations: [
    AboutUs3Component
  ],
  imports: [
    CommonModule,
    AboutUs3RoutingModule
  ]
})
export class AboutUs3Module { }
