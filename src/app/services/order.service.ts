import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';
const API_URL2 = `${environment.BASE_URL_ORDER}`;

@Injectable({
  providedIn: 'root',
})

export class OrderService {
  constructor(private http: HttpClient) {}

  getallOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findall');
  }
  getCompletedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findCompleted');
  }
  getPendingOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findPending');
  }
  getUnassignedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findUnassigned');
  }
  getCancelledOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL2 + '/findCancelled');
  }
  addOrder(order: Order): Observable<Object>{
    return this.http.post(API_URL2 + '/add',order);
  }
  deleteOrder(orderId: string): Observable<any>{
    return this.http.delete(API_URL2+'/delete/'+orderId);
  }
  getOneOrder(orderId:number): Observable<Object>{
    return this.http.get(API_URL2+'/findone/'+ orderId);
  }
}
