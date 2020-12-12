import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [ ExamsComponent ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    CarouselModule
  ]
})
export class ExamsModule { }
