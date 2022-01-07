import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  order:Order = new Order();
  constructor(private os:OrderService) { }

  ngOnInit(): void {
  }
  
}
