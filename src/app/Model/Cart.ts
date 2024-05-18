import { CartItem } from './CartItem';
import { Product } from './Product';

export class Cart {
  items: CartItem[] = [];
  products: Product[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
