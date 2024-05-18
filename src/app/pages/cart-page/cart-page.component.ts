import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../Model/CartItem';
import { Cart } from '../../Model/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {}

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

  setCartFromLocalStorage(): void {
    this.cart = this.cartService.getCartFromLocalStorage() || new Cart();
  }
}
