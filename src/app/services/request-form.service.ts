import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class RequestFormService {

  constructor(private http: HttpClient, 
    private router: Router) {}

    getAll(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/app/services/service-requests`);
    }

    add(form:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/app/services/service-requests`, {form});
    }
}
