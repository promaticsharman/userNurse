import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCartComponent } from './my-cart.component';

const routes: Routes = [{
	path: '',
	component: MyCartComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCartRoutingModule { }
