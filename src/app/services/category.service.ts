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
    return this.http.get(`${environment.apiUrl}/app/category`);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/app/category/${id}`);
  }

  createCategory(category: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/app/category`, {category});
  }

  updateCategory(id: number, category:any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/app/category/${id}`, {category});
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/app/category/${id}`);
  }
}
