import { Component } from '@angular/core';
import { Product } from '../../Model/Product';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  products: Product[] = [];
  product: Product | undefined;
  constructor(public dialog: MatDialog) {}
  showProductDesc = false;
  selectedProduct: Product;

  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }
}
