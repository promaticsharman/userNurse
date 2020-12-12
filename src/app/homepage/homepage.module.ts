import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomepageRoutingModule } from './homepage-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ]
})
export class HomepageModule { }
