import { Injectable } from '@angular/core';
import data from '../../assets/data.json';
import ProductM from './models/productM';

@Injectable({
  providedIn: 'root',
})
export class Product {
  getProducts() {
    return data as ProductM[];
  }
}
