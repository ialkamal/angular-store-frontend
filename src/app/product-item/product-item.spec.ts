import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItem } from './product-item';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductItem', () => {
  let component: ProductItem;
  let fixture: ComponentFixture<ProductItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItem],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
