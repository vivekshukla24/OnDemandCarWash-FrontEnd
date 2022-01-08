import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(private os: OrderService, private router: Router, private location: Location) {}
  ngOnInit(): void {
    this.getAllOrders();
  }
  // A method defined here to call order Service
  private getAllOrders() {
    this.os.getallOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  deleteOrder(orderid: string) {
    this.os.deleteOrder(orderid).subscribe((data) => {
      console.log(data);
      this.getAllOrders();
    });
  }
}
