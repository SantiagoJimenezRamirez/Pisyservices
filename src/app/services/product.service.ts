import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  createProduct(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/app/product/`, formData);
  }

  getAll(){
    return this.http.get(`${environment.apiUrl}/app/product/`);
  }

  getAllWithImg(){
    return this.http.get(`${environment.apiUrl}/app/product/getAll/`);
  }

  update(object:any, id:number){
    return this.http.put(`${environment.apiUrl}/app/product/${id}`, {object});
  }

  delete( id:number){
    
    return this.http.delete(`${environment.apiUrl}/app/product/${id}`);
  }
}
