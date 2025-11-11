import { Component } from '@angular/core';
import { Product } from '../product';
import ProductM from '../models/productM';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  constructor(private products: Product) {}
  productList: ProductM[] = [];

  ngOnInit() {
    this.productList = this.products.getProducts();
  }
}
