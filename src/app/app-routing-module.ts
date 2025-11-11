import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Confirmation } from './confirmation/confirmation';
import { Cart } from './cart/cart';
import { ProductItemDetail } from './product-item-detail/product-item-detail';

const routes: Routes = [
  {
    path: '',
    component: ProductList,
    title: 'Product List',
  },
  {
    path: 'cart',
    component: Cart,
    title: 'Cart',
  },
  {
    path: 'confirmation',
    component: Confirmation,
    title: 'Cart',
  },
  {
    path: 'product-item-detail/:id',
    component: ProductItemDetail,
    title: 'Cart',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
