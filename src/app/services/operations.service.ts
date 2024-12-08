import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient, 
    private router: Router) {}

    add(form:any){
      return this.http.post(`${environment.apiUrl}/api/operations`, form);
    }

    getAll(){
      return this.http.get(`${environment.apiUrl}/api/operations`);
    }
}