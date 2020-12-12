import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListRoutingModule } from './books-list-routing.module';
import { BooksListComponent } from './books-list.component';

import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [ BooksListComponent ],
  imports: [
    CommonModule,
    BooksListRoutingModule,
    MatCheckboxModule
  ]
})
export class BooksListModule { }
