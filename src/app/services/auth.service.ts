import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://664489c36c6a6565870afa77.mockapi.io/admin';
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((admin) => {
        const foundAdmin = admin.find(
          (admin) => admin.email === email && admin.password === password
        );
        return !!foundAdmin;
      })
    );
  }
}
