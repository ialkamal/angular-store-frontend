import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart-service';
import ProductM from '../models/productM';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(private cartService: CartService) {}
  cart: ProductM[] = [];
  total: string = '';
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  cartLoaded: boolean = false;
  router = new Router();

  ngOnInit() {
    this.cart = this.cartService.getFromCart();
    this.total = this.calculateTotal(this.cart);
    if (Number(this.total) > 0) this.cartLoaded = true;
    else this.cartLoaded = false;
  }

  changeCartQty(id: number, qty: string) {
    this.cart = this.cartService.updateCart(id, Number(qty));
    this.total = this.calculateTotal(this.cart);
    if (Number(this.total) > 0) this.cartLoaded = true;
    else this.cartLoaded = false;
  }

  calculateTotal(cart: ProductM[]) {
    return cart
      .reduce((acc, product) => {
        return acc + Number(product.qty) * product.price;
      }, 0)
      .toFixed(2);
  }

  submitForm() {
    this.cartService.resetCart();
    this.router.navigate(['/confirmation'], {
      state: { total: this.total, fullName: this.fullName },
    });
  }
}
