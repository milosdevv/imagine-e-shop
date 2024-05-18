import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../../services/product.service';
import { Category } from '../../Model/Category';
import { CategoriesService } from '../../services/categories.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../Model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];
  product: Product | undefined;
  categories: Category[] = [];
  users: User[] = [];

  constructor(
    private productService: ProductServiceService,
    private categoryService: CategoriesService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getUsers();
  }

  getProducts() {
    return this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  getUsers() {
    return this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
