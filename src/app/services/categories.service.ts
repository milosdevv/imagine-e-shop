import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Model/Category';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  products: Product[] = [];
  private apiUrl = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${categoryId}/products`);
  }

  deleteSingleCategory(id: number): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Category>(url);
  }
}
