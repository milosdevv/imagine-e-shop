import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../Model/Product';
import { Cart } from '../../../Model/Cart';
import { CartItem } from '../../../Model/CartItem';
import { CartService } from '../../../services/cart.service';
import { ProductServiceService } from '../../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../Model/Category';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  categoryId: number;
  product: Product | undefined;
  cart!: Cart;
  @Input() productSlides: Product;

  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.route.paramMap.subscribe((params) => {
      const categoryIdParam = params.get('categoryId');
      if (categoryIdParam) {
        this.categoryId = +categoryIdParam;
        this.getProductsByCategory();
      }
    });
    this.getCategories();
  }

  getProducts() {
    return this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  getProductsByCategory() {
    this.categoryService
      .getProductsByCategory(this.categoryId)
      .subscribe((response) => {
        console.log(response);
        this.products = response;
        this.changeDetector.detectChanges();
      });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      console.log(response);
      this.categories = response;
    });
  }
  navigateToCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId, 'products']);
  }
}
