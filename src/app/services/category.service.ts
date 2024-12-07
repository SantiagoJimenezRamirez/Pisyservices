import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/category`);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/category/${id}`);
  }

  createCategory(category: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/category`, {category});
  }

  updateCategory(id: number, category:any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/category/${id}`, {category});
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/category/${id}`);
  }
}
