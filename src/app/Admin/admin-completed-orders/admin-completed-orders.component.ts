import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-completed-orders',
  templateUrl: './admin-completed-orders.component.html',
  styleUrls: ['./admin-completed-orders.component.css'],
})
export class AdminCompletedOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(private os: OrderService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.completedOrders();
  }
  private completedOrders() {
    this.os.getCompletedOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  back() {
    this.location.back();
  }
}
