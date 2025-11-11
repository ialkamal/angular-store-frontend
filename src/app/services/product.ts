import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ProductM from '../models/productM';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);

  getProducts(): Observable<ProductM[]> {
    return this.http.get<ProductM[]>('/data.json');
  }
}
