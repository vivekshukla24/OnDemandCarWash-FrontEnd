import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-pending-orders',
  templateUrl: './admin-pending-orders.component.html',
  styleUrls: ['./admin-pending-orders.component.css'],
})
export class AdminPendingOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(private os: OrderService, private router: Router) {}
  ngOnInit(): void {
    this.pendingOrders();
  }
  private pendingOrders() {
    this.os.getPendingOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  all() {
    this.router.navigateByUrl('admin/allOrders');
  }
}
