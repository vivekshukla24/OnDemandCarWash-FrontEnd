import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  constructor(private os: OrderService, private router: Router) {}
  ngOnInit(): void {
    this.getAllOrders();
  }
  // A method defined here to call order Service
  private getAllOrders() {
    this.os.getallOrders().subscribe((data) => {
      this.OrderList = data;
    });
  }
  deleteOrder(orderId: number) {
    this.os.deleteOrder(orderId).subscribe((data) => {
      console.log(data);
      this.getAllOrders();
    });
  }
  completed() {
    this.router.navigateByUrl('admin/completed');
  }
  pending() {
    this.router.navigateByUrl('admin/pending');
  }
  unassigned() {
    this.router.navigateByUrl('admin/unassigned');
  }
  cancelled() {
    this.router.navigateByUrl('admin/completed');
  }
}
