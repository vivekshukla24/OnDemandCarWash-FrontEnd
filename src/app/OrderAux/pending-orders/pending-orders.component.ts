import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css'],
})
export class PendingOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(private os: OrderService, private location: Location) {}
  ngOnInit(): void {
    this.pendingOrders();
  }
  private pendingOrders() {
    this.os.getPendingOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  back(){
    this.location.back();
  }
}
