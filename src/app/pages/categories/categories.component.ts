import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product.service';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';
import { Product } from '../../Model/Product';
import { Category } from '../../Model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];
  product: Product | undefined;
  categories: Category[] = [];

  constructor(
    private productService: ProductServiceService,
    private categoryService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    return this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }
  navigateToCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId, 'products']);
  }
}
