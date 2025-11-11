import { Component } from '@angular/core';
import { Product } from '../services/product';
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
    this.products.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }
}
