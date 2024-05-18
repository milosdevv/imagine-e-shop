import { Product } from './Product';

export class CartItem {
  constructor(product: Product) {
    this.product = product;
    this.price;
  }
  product: Product;
  quantity: number = 1;

  get price(): number {
    return this.product.price * this.quantity;
  }
}
