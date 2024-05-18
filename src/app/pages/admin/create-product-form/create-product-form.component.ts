import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../Model/Product';
import { NgForm } from '@angular/forms';
import { Category } from '../../../Model/Category';
import { CategoriesService } from '../../../services/categories.service';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../../../services/product.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.scss',
})
export class CreateProductFormComponent implements OnInit {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';
  categories: Category[] = [];
  products: Product[] = [];
  images: File[] = [];
  constructor(
    private http: HttpClient,
    private categoryService: CategoriesService,
    private productService: ProductServiceService
  ) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  product: Product = new Product('', 0, '', [], 0, 0);

  @ViewChild('productForm') productForm: NgForm;
  onImageChange(event: any) {}
  onSubmit() {
    if (this.productForm.valid) {
      const image =
        typeof this.product.images === 'string'
          ? this.product.images.split(',')
          : this.product.images;
      this.product.images = image;
      this.http.post<Product>(this.apiUrl, this.product).subscribe(
        (response) => {
          console.log(response);
          this.productForm.resetForm();
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    }
  }
  onSelect(event: any) {
    console.log(event);
    // Check if event.addedFiles is defined
    if (event.addedFiles && event.addedFiles.length > 0) {
      // If yes, push the files to this.images
      this.images.push(...event.addedFiles);
    }
  }

  onRemove(index: number) {
    console.log(index);
    this.images.splice(index, 1);
  }

  uploadFiles() {
    const formData = new FormData();
    this.images.forEach((image, index) => {
      formData.append('images[]', image, `image_${index}`);
    });

    this.http
      .post<File>('https://api.escuelajs.co/api/v1/files/upload', formData)
      .subscribe(
        (response) => {
          console.log('Upload success:', response);
          // Reset images array after successful upload
          this.images = [];
        },
        (error) => {
          console.error('Upload error:', error);
        }
      );
  }

  getSafeUrl(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return reader.result;
    };
  }
}
