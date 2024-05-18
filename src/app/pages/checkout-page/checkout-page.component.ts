import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../Model/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  product: Product;
  @ViewChild('checkoutForm') checkoutForm: NgForm;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['productId']; // Convert to number
      if (productId) {
        console.log('Product ID:', productId); // Log productId
        this.productService.getProductById(productId).subscribe(
          (product: Product) => {
            this.product = product;
          },
          (error) => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }
  onFormSubmitted() {
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
  }
}
