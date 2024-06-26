import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		ReactiveFormsModule,
    GoogleMapsModule



  ]
})
export class ContactUsModule { }
