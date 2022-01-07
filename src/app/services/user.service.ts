import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
const API_URL = `${environment.BASE_URL_USER}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { 
  }
  getRatings(): Observable<any>{
    return this.http.get(API_URL +'/getallRatings');
  }
}
