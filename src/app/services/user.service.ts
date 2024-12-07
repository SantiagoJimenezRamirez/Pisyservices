// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/create`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/user/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  findUserById(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/user/${id}`);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token;
    return !!token; // Verifica si hay un token
  }
}
