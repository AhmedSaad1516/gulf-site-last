import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUs1RoutingModule } from './about-us-1-routing.module';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    MainComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  imports: [
    CommonModule,
    AboutUs1RoutingModule
  ]
})
export class AboutUs1Module { }
