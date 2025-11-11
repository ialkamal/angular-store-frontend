import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cart } from './cart/cart';
import { Confirmation } from './confirmation/confirmation';
import { ProductList } from './product-list/product-list';
import { ProductItem } from './product-item/product-item';
import { ProductItemDetail } from './product-item-detail/product-item-detail';
import { Header } from './layout/header/header';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Cart, Confirmation, ProductList, ProductItem, ProductItemDetail, Header],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
