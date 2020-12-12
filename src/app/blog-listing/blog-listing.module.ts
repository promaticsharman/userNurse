import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListingRoutingModule } from './blog-listing-routing.module';
import { BlogListingComponent } from './blog-listing.component';

@NgModule({
  declarations: [ BlogListingComponent],
  imports: [
    CommonModule,
    BlogListingRoutingModule
  ]
})
export class BlogListingModule { }
