import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product.service';
import { Product } from '../../Model/Product';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';
import { Category } from '../../Model/Category';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private http: HttpClient,
    private productService: ProductServiceService,
    private categoryService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    return this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  deleteSingleProduct(id: number) {
    return this.productService.deleteSingleProduct(id).subscribe((response) => {
      console.log('Product deleted successfully:', response);
      this.getProducts();
    });
  }

  getCategories() {
    return this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
      console.log(response);
    });
  }

  deleteSingleCategory(id: number) {
    return this.categoryService
      .deleteSingleCategory(id)
      .subscribe((response) => {
        console.log('Category deleted successfully:', response);
        this.getCategories();
      });
  }
}
