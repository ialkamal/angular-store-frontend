import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import ProductM from '../models/productM';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @ViewChild('qtySelect') qtySelect!: ElementRef<HTMLSelectElement>;
  @Input() product: any = {};
  selectedQty: number = 1;

  constructor(private cartService: CartService) {}

  addToCart(product: ProductM) {
    this.cartService.addtoCart({ ...product, qty: this.selectedQty });
    this.qtySelect.nativeElement.value = '1';
    this.selectedQty = 1;
  }

  selectQty(val: string) {
    this.selectedQty = Number(val);
  }
}
