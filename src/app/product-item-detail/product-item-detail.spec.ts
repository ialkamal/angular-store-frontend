import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemDetail } from './product-item-detail';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductItemDetail', () => {
  let component: ProductItemDetail;
  let fixture: ComponentFixture<ProductItemDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
