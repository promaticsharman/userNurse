import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListingComponent } from './blog-listing.component';

const routes: Routes = [{
	path: '',
	component: BlogListingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogListingRoutingModule { }
