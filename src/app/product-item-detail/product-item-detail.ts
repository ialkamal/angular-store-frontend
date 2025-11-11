import { Component, Input, signal, inject, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductM from '../models/productM';
import { Product } from '../services/product';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-item-detail',
  standalone: false,
  templateUrl: './product-item-detail.html',
  styleUrl: './product-item-detail.css',
})
export class ProductItemDetail {
  @ViewChild('qtySelector') qtySelector!: ElementRef<HTMLSelectElement>;
  productId = signal('');
  private activatedRoute = inject(ActivatedRoute);
  selectedProduct?: ProductM;
  selectedQty: number = 1;

  ngOnInit() {
    this.products.getProducts().subscribe((products) => {
      const foundProduct = products.find((p) => p.id == parseInt(this.productId()));
      if (foundProduct) {
        this.selectedProduct = foundProduct;
      }
    });
  }

  constructor(private products: Product, private cartService: CartService) {
    this.activatedRoute.params.subscribe((params) => {
      this.productId.set(params['id']);
    });
  }

  addtoCart(selectedProduct: ProductM) {
    this.cartService.addtoCart({ ...selectedProduct, qty: this.selectedQty });
    this.qtySelector.nativeElement.value = '1';
    this.selectedQty = 1;
  }
  selectQty(val: string) {
    this.selectedQty = Number(val);
  }
}
