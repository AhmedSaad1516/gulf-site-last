import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Aboutus2RoutingModule } from './aboutus2-routing.module';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { MainComponent } from './components/main/main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    Section1Component,
    Section2Component,
    MainComponent
  ],
  imports: [
    CommonModule,
    Aboutus2RoutingModule,
    CarouselModule
  ]
})
export class Aboutus2Module { }
