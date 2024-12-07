import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  createProduct(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      'Accept': 'application/json',
    });

    return this.http.post(`${environment.apiUrl}/api/products/`, formData, { headers });
  }


  getAll(){
    return this.http.get(`${environment.apiUrl}/api/products/`);
  }

  getAllWithImg(){
    return this.http.get(`${environment.apiUrl}/api/products/getAllWithImg/`);
  }

  update(object:any, id:number){
    return this.http.put(`${environment.apiUrl}/api/products/${id}`, {object});
  }

  delete( id:number){
    
    return this.http.delete(`${environment.apiUrl}/api/products/${id}`);
  }
}
