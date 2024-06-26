import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { Section5Component } from './components/section5/section5.component';
import { Section6Component } from './components/section6/section6.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    HomeMainComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,


  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    GoogleMapsModule,
    FormsModule,
    SharedModule
  ],

})
export class HomeModule { }
