import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../enviroments/enviroment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, 
    private router: Router) {}

    add(form:any){
      return this.http.post(`${environment.apiUrl}/api/requests`, {form});
    }

    getById(id:number){
      return this.http.get(`${environment.apiUrl}/api/requests/${id}`);
    }

    getAll(){
      return this.http.get(`${environment.apiUrl}/api/requests`);
    }

    delete(id:number){
      return this.http.delete(`${environment.apiUrl}/api/requests/${id}`);
    }

    edit(id:number, form:any):Observable<any>{
      return this.http.put(`${environment.apiUrl}/api/requests/${id}`, {form});
    }
}
