import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamChaptersRoutingModule } from './exam-chapters-routing.module';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExamChaptersRoutingModule,
    MatRadioModule
  ]
})
export class ExamChaptersModule { }
