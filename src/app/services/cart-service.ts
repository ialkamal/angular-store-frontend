import { Injectable } from '@angular/core';
import ProductM from '../models/productM';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ProductM[] = [];

  addtoCart(product: ProductM) {
    this.cart.push(product);
    alert('Item added to cart successfully!');
  }

  getFromCart() {
    return this.cart;
  }

  updateCart(id: number, qty: number) {
    this.cart = this.cart.map((product) => {
      if (product.id === id) {
        product.qty = qty;
      }
      return product;
    });
    this.cart = this.cart.filter((p) => p.qty != 0);
    return this.cart;
  }

  resetCart() {
    this.cart = [];
  }
}
