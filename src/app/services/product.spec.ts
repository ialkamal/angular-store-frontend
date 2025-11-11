import { TestBed } from '@angular/core/testing';
import { Product } from './product';
import { provideHttpClient } from '@angular/common/http';

describe('Product', () => {
  let service: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(Product);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
