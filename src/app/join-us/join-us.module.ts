import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinUsRoutingModule } from './join-us-routing.module';
import { JoinUsComponent } from './join-us/join-us.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    JoinUsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    JoinUsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JoinUsModule { }
