import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../Model/CartItem';
import { Cart } from '../../Model/Cart';

@Component({
  selector: 'app-product-item-page',
  templateUrl: './product-item-page.component.html',
  styleUrl: './product-item-page.component.scss',
})
export class ProductItemPageComponent implements OnInit {
  productId: number;
  product: Product;
  products: Product[] = [];
  cart!: Cart;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private cartService: CartService
  ) {
    this.setCart();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = +params.get('id');
      this.productService
        .getProductById(this.productId)
        .subscribe((product) => {
          this.product = product;
        });
    });

    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
