import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://664489c36c6a6565870afa77.mockapi.io/users';
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  findUserByEmailAndPassword(
    email: string,
    password: string
  ): Observable<User | null> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) => {
        const foundUser = users.find(
          (user) => user.email === email && user.password === password
        );
        return foundUser ? foundUser : null; // Return found user or null if not found
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserId(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }
}
