import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUs4RoutingModule } from './about-us-4-routing.module';
import { AboutUs4Component } from './about-us-4/about-us-4.component';


@NgModule({
  declarations: [
    AboutUs4Component
  ],
  imports: [
    CommonModule,
    AboutUs4RoutingModule
  ]
})
export class AboutUs4Module { }
