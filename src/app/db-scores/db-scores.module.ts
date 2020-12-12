import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbScoresRoutingModule } from './db-scores-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DbScoresRoutingModule,
    MatProgressBarModule
  ]
})
export class DbScoresModule { }
