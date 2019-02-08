import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'Products List' }
  },
  {
    path: 'Product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
