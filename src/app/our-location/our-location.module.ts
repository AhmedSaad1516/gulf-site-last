import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurLocationRoutingModule } from './our-location-routing.module';
import { OurLocationComponent } from './our-location/our-location.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OurLocationComponent
  ],
  imports: [
    CommonModule,
    OurLocationRoutingModule,
    FormsModule
  ]
})
export class OurLocationModule { }
